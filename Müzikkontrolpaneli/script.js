const progress = document.querySelector(".progress");
const progressWrapper = document.querySelector(".progress-bar");
var isHolding = false;

window.addEventListener("mousedown", (event)=>{
	if(event.target.className != "progress") return;
	isHolding = true;
	music.pause();
});

window.addEventListener("mouseup", ()=>{
	isHolding = false;
});

window.addEventListener("mousemove", (event)=>{
	if(!isHolding)return;
	progress.style.width = calculate(event.x) + "%";
});

const music=document.querySelector(".music");
var isPlaying = false;
music.addEventListener("play", ()=>{
	isPlaying = true;
	(async ()=>{
		while(isPlaying){
			progress.style.width = calculate2() + "%";
			await new Promise(r=>setTimeout(r, 100));
		}
	})();
});

music.addEventListener("pause", ()=>{
	isPlaying = false;
});

const playButton=document.querySelector(".play-pause")
playButton.addEventListener('click',abc)

function abc (){
	if(playButton.className=="fa-pause fas play-pause")
	{
		music.pause()
		playButton.className="play-pause fas fa-play"
	}
	else{
		music.play()
		playButton.className="fa-pause fas play-pause"
	}
	

	
}

function calculate(x){
	var data = progressWrapper.getBoundingClientRect();
	var baslangic = data.x;
	var bitis = data.x + data.width;
	if (x <= baslangic) return 0;
	if (x >= bitis) return 100;

	var xx = x - baslangic;
	return xx * 100 / data.width;
}

function calculate2(){
	var uzunluk = music.duration;

	return 100 * music.currentTime / uzunluk;
}
function calculate2() {
    var uzunluk = music.duration;
    var currentTime = music.currentTime;

    var currentMinutes = Math.floor(currentTime / 60);
    var currentSeconds = Math.floor(currentTime % 60);
    var totalTimeMinutes = Math.floor(uzunluk / 60);
    var totalTimeSeconds = Math.floor(uzunluk % 60);

    var currentTimeDisplay = currentMinutes + ":" + (currentSeconds < 10 ? "0" + currentSeconds : currentSeconds);
    var totalTimeDisplay = totalTimeMinutes + ":" + (totalTimeSeconds < 10 ? "0" + totalTimeSeconds : totalTimeSeconds);

    var currentTimeElement = document.querySelector(".current-time");
    var totalTimeElement = document.querySelector(".total-time");

    currentTimeElement.textContent = currentTimeDisplay;
    totalTimeElement.textContent = totalTimeDisplay;

    return 100 * currentTime / uzunluk;
}
const heartIcon = document.querySelector(".far.fa-heart");

heartIcon.addEventListener("click", function() {
  heartIcon.classList.toggle("fas");
  heartIcon.classList.toggle("far");
  heartIcon.style.color = "red";
});

// Yeni şarkıları bir dizi içinde tanımlayın
const songs = [
	{
	  title: "YERLİ PLAKA",
	  artist: "CEZA",
	  source: "./müzik/yerli plaka.mp3",
	  image: src="https://thisis-images.scdn.co/37i9dQZF1DZ06evO1dsssu-default.jpg"  
	  
	  
	},
	{
	  title: "ZEUS",
	  artist: "EMİNEM",
	  source :"./müzik/e1.mp3" ,
	  image: src="https://i.scdn.co/image/ab67616d0000b2736ca5c90113b30c3c43ffb8f4" 
	},
	
	// Diğer şarkıları buraya ekleyin
  ];
  
  // Mevcut şarkı indeksini takip edin
  let currentSongIndex = 0;
// İleri tuşuna tıklanıldığında bir sonraki şarkıya geçen fonksiyon
function playNextSong() {
	// Mevcut şarkı indeksini bir artırın
	currentSongIndex++;
  
	// Şarkı indeksini kontrol edin, son şarkıya ulaşıldıysa başa dönün
	if (currentSongIndex === songs.length) {
	  currentSongIndex = 0;
	}
  
	// Yeni şarkıyı yükleme işlemleri burada yapılır
	const newSong = songs[currentSongIndex];
  
	// Şarkı adını, sanatçıyı, kaynağı ve resmi güncelleyin
	const songTitleElement = document.querySelector(".title");
	const songArtistElement = document.querySelector(".artist");
	const audioElement = document.querySelector(".music");
	const imageElement = document.querySelector(".image-container img");
  
	songTitleElement.textContent = newSong.title;
	songArtistElement.textContent = newSong.artist;
	audioElement.src = newSong.source;
	imageElement.src = newSong.image;
  
	// Şarkıyı otomatik olarak çalın
	audioElement.play();
  }
  
  // İleri tuşuna tıklama olayını dinleyen bir olay dinleyici ekleyin
  const nextButton = document.getElementById("nextButton");
  nextButton.addEventListener("click", playNextSong);

  // DOM elementlerini seçme
const audio = document.querySelector('.music');
const rewindButton = document.querySelector('.fa-undo-alt');

// Şarkıyı başa alma fonksiyonu
function rewindSong() {
    audio.currentTime = 0; // Şarkı süresini sıfırla
}

// Şarkıyı başa alma butonuna tıklama olayını dinle
rewindButton.addEventListener('click', rewindSong);


