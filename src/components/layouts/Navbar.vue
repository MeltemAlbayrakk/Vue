<template>
    <nav class="navbar-container flex items-center justify-between  text-white p-4  " style="margin-left: 250px;" >
      <div class="flex items-center" style=" height:60px;">
        <!-- Logo veya site adı buraya gelebilir -->
       <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-lila">
            <path fill-rule="evenodd" d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clip-rule="evenodd" />
            </svg>
        </a>
        <img class=" ml-4 w-14" src="../../assets/user.png" alt="">
          <div class=" ml-6 flex flex-col">
            <a class="text-black font-bold" href="">Abrilay Khatun</a>
            <a class=" text-gray-500 opacity-75" href="">abrilakh@gmail.com</a>
          </div>

          <div style="width: 700px;">
            
          </div>
          



          <a class="ml-5" href="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-lila">
            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM6.262 6.072a8.25 8.25 0 1 0 10.562-.766 4.5 4.5 0 0 1-1.318 1.357L14.25 7.5l.165.33a.809.809 0 0 1-1.086 1.085l-.604-.302a1.125 1.125 0 0 0-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 0 1-2.288 4.04l-.723.724a1.125 1.125 0 0 1-1.298.21l-.153-.076a1.125 1.125 0 0 1-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 0 1-.21-1.298L9.75 12l-1.64-1.64a6 6 0 0 1-1.676-3.257l-.172-1.03Z" clip-rule="evenodd" />
            </svg>

          </a>
          <a class="ml-7" href="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-lila">
            <path fill-rule="evenodd" d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 0 0 3 3h.27l-.155 1.705A1.875 1.875 0 0 0 7.232 22.5h9.536a1.875 1.875 0 0 0 1.867-2.045l-.155-1.705h.27a3 3 0 0 0 3-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0 0 18 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM16.5 6.205v-2.83A.375.375 0 0 0 16.125 3h-8.25a.375.375 0 0 0-.375.375v2.83a49.353 49.353 0 0 1 9 0Zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 0 1-.374.409H7.232a.375.375 0 0 1-.374-.409l.526-5.784a.373.373 0 0 1 .333-.337 41.741 41.741 0 0 1 8.566 0Zm.967-3.97a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H18a.75.75 0 0 1-.75-.75V10.5ZM15 9.75a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V10.5a.75.75 0 0 0-.75-.75H15Z" clip-rule="evenodd" />
          </svg>

          </a>
  

          <div class="  ml-8 items-end flex flex-col">
            <a class="text-black font-bold text-2xl" href=""> {{ currentTime }}</a>
            <a class=" text-gray-500 opacity-75" href="">{{ currentDateTime }}</a>
          </div>

          <button class=" ml-8 bg-lila hover:bg-purple-700 text-white  py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
             Pending Tasks
          </button>

          <a class="ml-7">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-lila">
              <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
              <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z" clip-rule="evenodd" />
            </svg>
          </a>


        <a class="ml-7">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-lila">
          <path fill-rule="evenodd" d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clip-rule="evenodd" />
        </svg>

        </a>

        <a class="ml-7">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-lila">
          <path fill-rule="evenodd" d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z" clip-rule="evenodd" />
        </svg>
        </a>
          

     
      </div>
     
    </nav>
  </template>
  
  <script>

  export default {
    name: "Navbar",
    data() {
    return {
      currentTime: "",
      currentDateTime: ""
    };
  },
  created() {
    // Yeni bir saat nesnesi oluştur
    this.updateTime();
    // 1 saniyede bir saat bilgisini güncelle
    setInterval(this.updateTime, 1000);

    this.updateDateTime();
    // 1 saniyede bir saat bilgisini güncelle
    setInterval(this.updateDateTime, 1000);
  },
    methods:{
      updateTime() {
      // Anlık tarih ve saat bilgisini al
      const now = new Date();
      // Saat, dakika ve saniyeyi alarak currentTime verisini güncelle
      this.currentTime = `${this.formatTime(now.getHours())}:${this.formatTime(now.getMinutes())}`; 
    },
    formatTime(time) {
      // Saat, dakika veya saniye 10'dan küçükse başına 0 ekle
      return time < 10 ? `0${time}` : time;
    },


    updateDateTime() {
      // Anlık tarih ve saat bilgisini al
      const now = new Date();
      // Haftanın gününü ve ayın adını al
      const dayOfWeek = this.getDayOfWeek(now.getDay());
      const monthName = this.getMonthName(now.getMonth());
      // Tarihi ve saati oluşturarak currentDateTime verisini güncelle
      this.currentDateTime = `${dayOfWeek} ${now.getDate()} ${monthName} ${now.getFullYear()} `;
    },
    getDayOfWeek(day) {
      const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      return daysOfWeek[day];
    },
    getMonthName(month) {
      const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      return monthNames[month];
    },
    formatTime(time) {
      // Saat veya dakika 10'dan küçükse başına 0 ekle
      return time < 10 ? `0${time}` : time;
    }
  }



  }
    
  
  </script>
  
  <style scoped>
  .navbar-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
  }
  </style>
  