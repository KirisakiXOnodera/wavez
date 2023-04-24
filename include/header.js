class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback(){
        this.innerHTML = `
        <header class = "bg-primary h-[147px]">
            <div class ="flex align-middle">
                <div class="flex-col items-start p-0 gap-[3.64px]">
                    <img src = "/assets/wavesLogo.png" class = "absolute w-[76px] h-[59.64px] 
                    left-[49px] top-[43px]" alt = "Logo"> 
                </div>
                <div class = "flex-row items-center p-[10px] gap-[10px]">
                    <h1 class="text-white font-Asul font-normal not-italic 
                    text-[44px] leading-[53px] tracking-[0.18em] capitalize absolute 
                    w-[193px] h-[73px] left-[160px] top-[50px]">WAVEZ</h1>
                </div>
                <div class = "flex-row justify-center items-center p-[10px] gap-[10px] absolute
                w-[68px] h-[46px] right-[550px] top-[50px]">
                    <p class="text-white font-Alata font-normal not-italic  
                    text-[19px] leading-[26px] capitalize w-[48px] h-[26px]">Login</p>
                </div>
                <div class = "flex-row justify-center items-center p-[10px] gap-[10px] absolute
                w-[87px] h-[46px] right-[401px] top-[50px]">
                    <p class="text-white font-Alata font-normal not-italic  
                    text-[19px] leading-[26px] capitalize w-[67px] h-[26px]">Sign Up</p>
                </div>
                <div>
                    <button class = "text-white absolute w-[263px] h-[59px] right-[66px] top-[43px]">
                        <span class ="text-black font-Alata font-normal not-italic text-[26px] leading-[36px] capitalize bg-white">Get Started</span>
                    </button>
                </div>       
            </div>
        </header>
        `;
    }
}

customElements.define('header-component', Header);