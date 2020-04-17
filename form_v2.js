"(function(){

window.addEventListener('load', function(){

var sourceControlId = "price-0000002d-prefix-acc", /** THE ID OF THE SENDER CONTROL */

var targetControlId = "price-00000036-prefix-acc", /** THE ID OF THE RECEIVER CONTROL **/

domAbstractionLayer = loader.getDOMAbstractionLayer(),

sourceControlInstance = loader.getEngine().getDocument().getElementById(sourceControlId);

sourceControlInstance.on('value-change', function(){

domAbstractionLayer.setControlValueById(

String(targetControlId),

domAbstractionLayer.getControlValueById(

String(sourceControlId)

)

);

});

domAbstractionLayer.setControlValueById(

String(targetControlId),

domAbstractionLayer.getControlValueById(

String(sourceControlId)

)

);

});

})();"
