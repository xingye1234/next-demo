export function debounce(fun: Function, delay: number) {
    let timer: ReturnType<typeof setTimeout> | number;
    return function (arg:any){
        if(timer) clearTimeout(timer);
        timer = setTimeout(function(){
            fun.call(this, arg)
        }, delay);
    }
}