export async function fetcher  (url, options = {}){
    let response
    if(!options){
        response = await fetch(url)
    }else{
        response = await fetch(url, options)
    }
    const blogdata = await response.json();
    return blogdata;
}