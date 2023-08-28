export default function Footer() {
  return (
    <section className="bg-[#f6f4f4]">
      <div className="max-w-[1180px] mx-auto flex justify-between items-center py-6">
        <div className="text-text-2-bolder">
          <a className="text-primary">Sitemap</a>&nbsp;|&nbsp;
          <a className="text-primary">Privacy Policy</a>&nbsp;|&nbsp;
          <a className="text-primary">Terms & Conditions</a>
        </div>
        <div>
          <span className="text-text-3-bold">
            © 2023 Copyright Prices People Pay
          </span>
        </div>
        <div className="flex gap-2">
          <div className="w-[38px] h-[38px]">
            <img src="icons/facebook_icon.png" alt="facebook"></img>
          </div>
          <div className="w-[38px] h-[38px]">
            <img src="icons/instagram_icon.png" alt="instagram"></img>
          </div>
          <div className="w-[38px] h-[38px]">
            <img src="icons/linkedin_icon.png" alt="linkedin"></img>
          </div>
          <div className="w-[38px] h-[38px]">
            <img src="icons/twitter_icon.png" alt="twitter"></img>
          </div>
        </div>
      </div>
    </section>
  );
}
