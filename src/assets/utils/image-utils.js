

export default function getImageURL(name){
    return new URL(`../${name}`,import.meta.url).href;
}