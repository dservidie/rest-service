
module.exports.out = function(obj){
    for (var key in obj) {
        try{
            var Type = typeof Obj[key];
            if(Type != 'function'){
                console.log(key + ' [' + Type + ']: ' + Obj[key]);
            }
        }catch(ex){
        }
    }
} 

