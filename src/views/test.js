
function pos(td, arr, path=[], currpath){
    if(td===0){
        currpath=null;
        path.push(currpath);
        return;
    }
    if(td<=0)return;

    for(let num of arr){
        pos(td-num, arr, path, currpath.push(num) )
    }
}