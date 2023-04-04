
const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCtqHCdL5nEjZp5FHAokQ-wQ&part=snippet%2Cid&order=date&maxResults=9';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7db9bdfc45msh6cae3ec4f7e5318p11e678jsn4a75a04afa07',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fechtData (url){
    const res = await fetch(url,options);
    const data = await res.json();
    return data;
}

(async ()=>{
    try {
        const videos = await fechtData(API);

        let vista = `
            ${videos.items.map(video => `
                
            <div class="group relative">
               <div
               class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
               <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
               </div>
               <div class="mt-4 flex justify-between">
               <h3 class="text-sm text-gray-700">
                   <span aria-hidden="true" class="absolute inset-0"></span>
                   ${video.snippet.title}
               </h3>
               </div>
           </div>
            `).slice(0,4).join('')}
        `;
        
        content.innerHTML = vista;

    } catch (error) {
        console.log(error);
    }
})();