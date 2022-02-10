function initMap() {
    const Museum = { lat: 50.47105008826532, lng: 30.529165884095317 };

   
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 18,
      center: Museum,
    });
    
    const marker = new google.maps.Marker({
      position: Museum,
      map: map,
      animation:google.maps.Animation.BOUNCE,
    //   icon:'../svg/003-pin.svg'
    });
}