const fs = require("fs");
const logger = require("../logger")("commands:meta");
const save = require("../utils/save");
const usage = require('../../bin/index')

function getMeta(filename, args) {
  try {
    if (filename == undefined){
      throw Error(`Invalid filepath!
      Usage: sysnutils --meta <filepath>
      `)
    }
    let meta = fs.statSync(filename);
    if (meta.isDirectory) {
      let metaSelection = {
        _filename: filename,
        isSystemFile: meta.rdev,
        size: meta.size.toLocaleString(),
        sizeMB: (meta.size / 1_000_000).toFixed(2),
        creationDate: meta.birthtime,
        modTime: meta.mtime,
        accessTime: meta.atime,
      };
      const isSystemFile = metaSelection.isSystemFile === 1 ? "true" : "false";

      let formattedMeta = `dirname: ${metaSelection._filename}\nfullPath: ${process.cwd()}\nisSystemFile: ${isSystemFile}\nsize: ${metaSelection.size} Bytes / ${metaSelection.sizeMB} MB\ncreationDate: ${metaSelection.creationDate}\nlastAccessDate: ${metaSelection.accessTime}\nmodificationDate: ${metaSelection.modTime}\n`;
      saveMeta(formattedMeta, args, metaSelection._filename);
    } else {
      let metaSelection = {
        _filename: filename,
        isSystemFile: meta.rdev,
        size: meta.size.toLocaleString(),
        sizeMB: (meta.size / 1_000_000).toFixed(2),
        creationDate: meta.birthtime,
        modTime: meta.mtime,
        accessTime: meta.atime,
      };
      const isSystemFile = metaSelection.isSystemFile === 1 ? "true" : "false";

      let formattedMeta = `filename: ${metaSelection._filename}\nfullPath: ${process.cwd()}\nisSystemFile: ${isSystemFile}\nsize: ${metaSelection.size} Bytes / ${metaSelection.sizeMB} MB\ncreationDate: ${metaSelection.creationDate}\nlastAccessDate: ${metaSelection.accessTime}\nmodificationDate: ${metaSelection.modTime}\n`;
      saveMeta(formattedMeta, args, metaSelection._filename);
    }
  } catch (e) {
    logger.warning("Error: ", e.message);
  }
}
function saveMeta(meta, args, __filename) {
  logger.warning(meta)

  __filename = __filename.replace(/[\\/]/g, '')
  if (args == "--save") {
    save.saveOutput(meta, __filename);
  }
}
module.exports = { getMeta };
