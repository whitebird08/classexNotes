function reverseCopy('log.log'){
  fs.readFile('log.log', function(err, data) {
    if (err){throw err} 
    else {
      fs.writeFile('log.log' + '.reverse', data.toString().split('\n').reverse().join(‘\n'));
    }
  }); 
}

reverseCopy(process.argv[2]);



// Run a JavaScript file with node.
// Use fs to parse files and understand more about file I/O.
// Use the File System Module (fs) to interact with the filesystem.