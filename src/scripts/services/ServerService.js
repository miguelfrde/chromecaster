import fs from 'fs';
import http from 'http';
import path from 'path';
import pump from 'pump';
import network from 'network-address';
import rangeParser from 'range-parser';
import mime from 'mime'


export default class ServerService {
  static _server;

  static server() {
    if (!this._server) {
      this._server = this._createServer()
    }
    return this._server;
  }

  static urlFor(file) {
    const publicIp = network();
    const port = this.server().address().port;
    return `http://${publicIp}:${port}${file}`;
  }

  static _createServer() {
    return http.createServer(function (req, res) {
      const requestedFile = decodeURI(req.url.split('?')[0]);
      console.log("Received request for ", requestedFile)
      const filename = path.resolve('/', requestedFile);

      fs.stat(filename, function (err, st) {
        if (err) {
          res.statusCode = 404;
          res.end();
          return;
        }

        var range = req.headers.range && rangeParser(st.size, req.headers.range)[0];

        res.setHeader('Accept-Ranges', 'bytes');
        res.setHeader('Content-Type', mime.lookup(filename));

        if (!range) {
          res.setHeader('Content-Length', st.size);
          if (req.method === 'HEAD') {
            return res.end();
          }
          pump(fs.createReadStream(filename), res);
          return;
        }

        res.statusCode = 206;
        res.setHeader('Content-Length', range.end - range.start + 1);
        res.setHeader('Content-Range', 'bytes ' + range.start + '-' + range.end + '/' + st.size);
        if (req.method === 'HEAD') {
          return res.end();
        }
        pump(fs.createReadStream(filename, range), res);
      })
    });
  }
}
