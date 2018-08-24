const mongoose = require("mongoose");

// nice
// jjjjjjjjjjjjjjjjjjjjjjjj
mongoose.connect('mongodb://nexus:takos123@ds121652.mlab.com:21652/nexusdb')
.then(()=> console.log('Nice ! MongoDB Connected')
).catch(err=> console.log(err));; 

module.exports = mongoose;