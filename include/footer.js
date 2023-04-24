class Footer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback(){
        this.innerHTML = `
        <footer class = "bg-primary left-0 right-0 h-[270px] bottom-[-0.49%]">
        <div class ="flex-col items-start p-0 g-[14px] absolute w-[127px] h-[146px] left-[347px] ">
        <p class = "text-white font-Alata not-italic font-normal
        text-[19px] leading-[26px] capitalize w-[85px] h-[26px] order-0 flex-grow-0 flex-none">Company</p>
        <p class = "text-white font-Alata not-italic font-normal
        text-[19px] leading-[26px] capitalize w-[54px] h-[26px] order-1 flex-grow-0 flex-none">About</p>
        <p class = "text-white font-Alata not-italic font-normal
        text-[19px] leading-[26px] capitalize w-[54px] h-[26px] order-2 flex-grow-0 flex-none">Jobs</p>
        <p class = "text-white font-Alata not-italic font-normal
        text-[19px] leading-[26px] capitalize w-[127px] h-[26px] order-3 flex-grow-0 flex-none">For The Record</p>
        </div>

        <div class ="flex-col items-start p-0 g-[14px] absolute w-[115px] h-[146px] left-[570px] ">
            <p class = "text-white font-Alata not-italic font-normal
        text-[19px] leading-[26px] capitalize w-[115px] h-[26px] order-0 flex-grow-0 flex-none">Communities</p>
        <p class = "text-white font-Alata not-italic font-normal
        text-[19px] leading-[26px] capitalize w-[97px] h-[26px] order-1 flex-grow-0 flex-none">Developers</p>
        <p class = "text-white font-Alata not-italic font-normal
        text-[19px] leading-[26px] capitalize w-[100px] h-[26px] order-2 flex-grow-0 flex-none">Advertising</p>
        <p class = "text-white font-Alata not-italic font-normal
        text-[19px] leading-[26px] capitalize w-[78px] h-[26px] order-3 flex-grow-0 flex-none">Investors</p>
        </div>

        <div class ="flex-col items-start p-0 g-[14px] absolute w-[102px] h-[186px] left-[793px] ">
            <p class = "text-white font-Alata not-italic font-normal
        text-[19px] leading-[26px] capitalize w-[102px] h-[26px] order-0 flex-grow-0 flex-none">Useful Links</p>
        <p class = "text-white font-Alata not-italic font-normal
        text-[19px] leading-[26px] capitalize w-[69px] h-[26px] order-1 flex-grow-0 flex-none">Support</p>
        <p class = "text-white font-Alata not-italic font-normal
        text-[19px] leading-[26px] capitalize w-[48px] h-[26px] order-2 flex-grow-0 flex-none">Legal</p>
        <p class = "text-white font-Alata not-italic font-normal
        text-[19px] leading-[26px] capitalize w-[63px] h-[26px] order-3 flex-grow-0 flex-none">Privacy</p>
        <p class = "text-white font-Alata not-italic font-normal
        text-[19px] leading-[26px] capitalize w-[68px] h-[26px] order-4 flex-grow-0 flex-none">Cookies</p>
        </div>
        </footer>
        `;
    }        
}

customElements.define('footer-component', Footer);