var fs = require("fs");


//4.function that handles the reading of files and merge in value
	//read from file and get a string
		//merge values into string
		function mergeValues(values, content){
			//Cycle over the keys
			for(var key in values){
				//Replace all {{key}} with values from values object
				content = content.replace("{{" + key + "}}", values[key])
			}
			//return merged content
			return content;
		}

function view(templateName, values, response){
	//Read from the template file
	var fileContents = fs.readFileSync('./views/' + templateName + ".html", {encoding:"utf8"});
	  //Insert Values into content
	  fileContents = mergeValues(values, fileContents)
	  //Writ out hte contents to the response
	  response.write(fileContents);
}
module.exports.view = view;

