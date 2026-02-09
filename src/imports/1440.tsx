import svgPaths from "./svg-vp5y7tg93s";
import imgImageShadow from "figma:asset/a5a7e98c99927f6838ad5d9639df6efe796b7bf9.png";
import imgImage from "figma:asset/a6b6fe6514798e0aeb7126f24ed27dfed1705fea.png";
import imgBackgroundShadow from "figma:asset/1642db49cda0faa316104887d8bf01b5a6975f0f.png";
import imgImage1 from "figma:asset/f8bbd1eab0e471351cd3438be6279f5e76bea363.png";

function Frame26() {
  return (
    <div className="h-[35px] relative shrink-0 w-[50.6px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.5997 35">
        <g id="Frame 40">
          <path d={svgPaths.p338de7f0} fill="var(--fill-0, #2D4B2D)" id="Vector 2" />
          <path d={svgPaths.p1c2755f2} fill="var(--fill-0, #2D4B2D)" id="Vector 4" />
          <path d={svgPaths.p1f352f00} fill="var(--fill-0, white)" id="Vector 3" stroke="var(--stroke-0, white)" strokeWidth="0.0255102" />
          <path d={svgPaths.p2c36a500} fill="var(--fill-0, white)" id="Vector 5" stroke="var(--stroke-0, white)" strokeWidth="0.0255102" />
          <path d={svgPaths.p2ae64e00} fill="var(--fill-0, #2D4B2D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[7.134px] items-center relative shrink-0">
      <Frame26 />
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#2d4b2d] text-[17.834px] tracking-[-0.4458px] uppercase whitespace-nowrap">
        <p>
          <span className="leading-[24.967px]">{`Thattil `}</span>
          <span className="font-['Manrope:Light',sans-serif] font-light leading-[24.967px]">FURNITURE</span>
        </p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#2d4b2d] h-[48px] relative rounded-[12px] shrink-0 w-[225px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[16.5px] justify-center leading-[0] left-[calc(50%+0.07px)] text-[12px] text-center text-white top-1/2 tracking-[1.2px] uppercase w-[98.438px]">
        <p className="leading-[18px] whitespace-pre-wrap">Contact us</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-between px-[37.5px] py-[12px] relative shrink-0 w-[1440px]" data-name="Container">
      <Frame2 />
      <Button />
    </div>
  );
}

function Header() {
  return (
    <div className="backdrop-blur-[4.5px] bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col h-[91.5px] items-center justify-center relative shrink-0 w-[1440px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[rgba(45,75,45,0.05)] border-b-[0.75px] border-solid inset-0 pointer-events-none" />
      <Container />
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(163,177,138,0.1)] h-[17.25px] relative rounded-[7499.25px] shrink-0 w-[159.27px]" data-name="Overlay">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[10.5px] justify-center leading-[0] left-[12px] text-[#2d4b2d] text-[7.5px] top-[8.25px] tracking-[1.5px] uppercase w-[135.42px]">
        <p className="leading-[11.25px] whitespace-pre-wrap">Healing Through Nature</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[21px] relative w-[18.015px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.015 21">
        <g id="Icon">
          <path d={svgPaths.p737ad00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#2d4b2d] h-[43.5px] relative rounded-[18px] shrink-0 w-[181.77px]" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[16.5px] justify-center leading-[0] left-[24px] text-[12px] text-white top-1/2 w-[106.988px]">
        <p className="leading-[18px] whitespace-pre-wrap">Explore Collection</p>
      </div>
      <div className="absolute flex h-[21px] items-center justify-center left-[139.76px] top-[11.25px] w-[18.015px]">
        <div className="-scale-y-100 flex-none">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[43.5px] relative rounded-[18px] shrink-0 w-[153.33px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[0.75px] border-[rgba(45,75,45,0.2)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[16.5px] justify-center leading-[0] left-[24.75px] text-[#2d4b2d] text-[12px] top-[21.75px] w-[104.061px]">
        <p className="leading-[18px] whitespace-pre-wrap">Learn the Science</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Link />
      <Link1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[18.75px] items-start relative shrink-0 w-[441.424px]">
      <Overlay />
      <div className="flex flex-col font-['Manrope:Light',sans-serif] font-light h-[128.25px] justify-center leading-[54px] relative shrink-0 text-[#2d4b2d] text-[54px] w-full whitespace-pre-wrap">
        <p className="mb-0">Furniture that</p>
        <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold">Restores Vitality</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[61.875px] justify-center leading-[21.938px] relative shrink-0 text-[13.5px] text-[rgba(45,75,45,0.7)] w-[379.71px] whitespace-pre-wrap">
        <p className="mb-0">{`Crafted from 40+ rare medicinal woods, our furniture isn't just`}</p>
        <p className="mb-0">{`for living—it's for healing. Experience centuries-old Ayurvedic`}</p>
        <p>wisdom in your modern home.</p>
      </div>
      <Frame />
    </div>
  );
}

function ImageShadow() {
  return (
    <div className="bg-size-[570px_570px] bg-top-left h-[570px] overflow-clip relative rounded-[22.5px] shrink-0 w-[569.25px]" data-name="Image+Shadow" style={{ backgroundImage: `url('${imgImageShadow}')` }}>
      <div className="absolute bg-[rgba(163,177,138,0.2)] blur-[24px] h-[570px] right-0 rounded-[7499.25px] top-0 w-[576px]" data-name="Overlay+Blur" />
    </div>
  );
}

function B() {
  return (
    <div className="content-stretch flex gap-[150px] items-center relative shrink-0" data-name="B1">
      <Frame1 />
      <ImageShadow />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-center justify-center relative shrink-0 text-center whitespace-pre-wrap">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[57.75px] justify-center leading-[27px] relative shrink-0 text-[#603808] text-[22.5px] w-[676.5px]">
        <p className="mb-0">{`"Our mission is to bridge the gap between ancient healing and`}</p>
        <p>{`modern living spaces."`}</p>
      </div>
      <div className="flex flex-col font-['Manrope:Light',sans-serif] font-light h-[93.375px] justify-center leading-[24.375px] relative shrink-0 text-[15px] text-[rgba(45,75,45,0.8)] w-full">
        <p className="mb-0">At Thattil, we believe that the environment you rest in determines the quality of your life. For over</p>
        <p className="mb-0">three centuries, our lineage has mastered the art of identifying medicinal timber that interacts with</p>
        <p className="mb-0">{`the human body's bio-energies (Doshas). Each piece we create is a living organism designed to`}</p>
        <p>detoxify and rejuvenate.</p>
      </div>
    </div>
  );
}

function B1() {
  return (
    <div className="bg-[rgba(245,235,224,0.3)] content-stretch flex flex-col h-[262.5px] items-center justify-center px-[362.25px] py-[30px] relative rounded-[7.5px] shrink-0 w-[1440px]" data-name="B2">
      <Frame3 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <B1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[42.746px] relative w-[34.974px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.9741 42.7461">
        <g id="Icon">
          <path d={svgPaths.p519fa00} fill="var(--fill-0, #A3B18A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[10.687px] items-start relative shrink-0 w-[206.93px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon1 />
        </div>
      </div>
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#2d4b2d] text-[18px] whitespace-nowrap">
        <p className="leading-[27.202px]">Prescription Grade</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[37.889px] justify-center leading-[19.43px] relative shrink-0 text-[13.5px] text-[rgba(45,75,45,0.6)] w-[204.987px] whitespace-pre-wrap">
        <p className="mb-0">Woods chosen based on specific</p>
        <p>health requirements.</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center p-[29.145px] relative rounded-[9.715px] shrink-0 w-[266.25px]">
      <Frame5 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[42.746px] relative w-[34.974px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.9741 42.7461">
        <g id="Icon">
          <path d={svgPaths.p234d9b80} fill="var(--fill-0, #A3B18A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[10.687px] items-start relative shrink-0 w-[206.93px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon2 />
        </div>
      </div>
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#2d4b2d] text-[18px] whitespace-nowrap">
        <p className="leading-[27.202px]">Eco-Conscious</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[37.889px] justify-center leading-[19.43px] relative shrink-0 text-[13.5px] text-[rgba(45,75,45,0.6)] w-[206.609px] whitespace-pre-wrap">
        <p className="mb-0">Sustainably harvested from deep</p>
        <p>Kerala forests.</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center p-[29.145px] relative rounded-[9.715px] shrink-0 w-[266.25px]">
      <Frame7 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[42.746px] relative w-[34.974px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.9741 42.7461">
        <g id="Icon">
          <path d={svgPaths.p29ba8200} fill="var(--fill-0, #A3B18A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[10.687px] items-start relative shrink-0 w-[206.93px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon3 />
        </div>
      </div>
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#2d4b2d] text-[18px] whitespace-nowrap">
        <p className="leading-[27.202px]">Handmade Legacy</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[37.889px] justify-center leading-[19.43px] relative shrink-0 text-[13.5px] text-[rgba(45,75,45,0.6)] w-[203.646px] whitespace-pre-wrap">
        <p className="mb-0">Crafted by master artisans using</p>
        <p>traditional tools.</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center p-[29.145px] relative rounded-[9.715px] shrink-0 w-[266.25px]">
      <Frame11 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[42.746px] relative w-[34.974px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.9741 42.7461">
        <g id="Icon">
          <path d={svgPaths.pb83a8f0} fill="var(--fill-0, #A3B18A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[10.687px] items-start relative shrink-0 w-[206.93px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon4 />
        </div>
      </div>
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#2d4b2d] text-[18px] whitespace-nowrap">
        <p className="leading-[27.202px]">Pure Treatment</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[37.889px] justify-center leading-[19.43px] relative shrink-0 text-[13.5px] text-[rgba(45,75,45,0.6)] w-[188.374px] whitespace-pre-wrap">
        <p className="mb-0">Zero synthetic varnishes; only</p>
        <p>natural oil finishes.</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center p-[29.145px] relative rounded-[9.715px] shrink-0 w-[266.25px]">
      <Frame13 />
    </div>
  );
}

function B2() {
  return (
    <div className="content-stretch flex gap-[36px] items-center relative shrink-0" data-name="b3">
      <Frame4 />
      <Frame6 />
      <Frame10 />
      <Frame12 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center py-[15px] relative shrink-0 w-full">
      <B2 />
    </div>
  );
}

function Image() {
  return <div className="absolute bg-size-[465px_465px] bg-top-left h-[300px] left-0 right-0 top-0" data-name="Image" style={{ backgroundImage: `url('${imgImageShadow}')` }} />;
}

function Button1() {
  return (
    <div className="absolute bg-[#2d4b2d] h-[33px] left-[30px] rounded-[7499.25px] top-[426px] w-[139.245px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[14.25px] justify-center leading-[0] left-[calc(50%+0.15px)] text-[10.5px] text-center text-white top-[calc(50%-0.38px)] tracking-[1.05px] uppercase w-[91.536px]">
        <p className="leading-[15px] whitespace-pre-wrap">Explore Piece</p>
      </div>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="absolute bg-white inset-[93px_495px_0_0] overflow-clip rounded-[7.5px] shadow-[0px_0.75px_1.5px_0px_rgba(0,0,0,0.05)]" data-name="Background+Shadow">
      <Image />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] left-[30px] text-[#2d4b2d] text-[18px] top-[342px] w-[210.464px]">
        <p className="leading-[24px] whitespace-pre-wrap">Ayurvedic Medicinal Cot</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[34.5px] justify-center leading-[18px] left-[30px] text-[12px] text-[rgba(45,75,45,0.6)] top-[384px] w-[387.42px] whitespace-pre-wrap">
        <p className="mb-0">The centerpiece of healing furniture. Constructed from specific woods</p>
        <p>like Bijasal, designed for spinal alignment and overnight detoxification.</p>
      </div>
      <Button1 />
    </div>
  );
}

function Image1() {
  return <div className="absolute bg-size-[465px_465px] bg-top-left h-[300px] left-0 right-0 top-0" data-name="Image" style={{ backgroundImage: `url('${imgImage}')` }} />;
}

function Button2() {
  return (
    <div className="absolute bg-[#2d4b2d] h-[33px] left-[30px] rounded-[7499.25px] top-[426px] w-[139.245px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[14.25px] justify-center leading-[0] left-[calc(50%+0.15px)] text-[10.5px] text-center text-white top-[calc(50%-0.38px)] tracking-[1.05px] uppercase w-[91.536px]">
        <p className="leading-[15px] whitespace-pre-wrap">Explore Piece</p>
      </div>
    </div>
  );
}

function BackgroundShadow1() {
  return (
    <div className="absolute bg-white inset-[93px_0_0_495px] overflow-clip rounded-[7.5px] shadow-[0px_0.75px_1.5px_0px_rgba(0,0,0,0.05)]" data-name="Background+Shadow">
      <Image1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] left-[30px] text-[#2d4b2d] text-[18px] top-[342px] w-[154.087px]">
        <p className="leading-[24px] whitespace-pre-wrap">The Healing Chair</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[34.5px] justify-center leading-[18px] left-[30px] text-[12px] text-[rgba(45,75,45,0.6)] top-[384px] w-[383.25px] whitespace-pre-wrap">
        <p className="mb-0">Perfect for daily meditation or office use. Its ergonomic design</p>
        <p>encourages active posture while releasing soothing medicinal scents.</p>
      </div>
      <Button2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[582px] left-[240px] right-[240px] top-[72px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[30px] justify-center leading-[0] left-0 text-[#2d4b2d] text-[27px] top-[15px] w-[300.83px]">
        <p className="leading-[30px] whitespace-pre-wrap">Our Healing Collection</p>
      </div>
      <div className="absolute bg-[#a3b18a] h-[3px] left-0 top-[42px] w-[60px]" data-name="Background" />
      <BackgroundShadow />
      <BackgroundShadow1 />
    </div>
  );
}

function B3() {
  return (
    <div className="bg-[rgba(254,250,224,0.5)] h-[726px] relative shrink-0 w-[1440px]" data-name="b4">
      <Container1 />
    </div>
  );
}

function BackgroundShadow2() {
  return (
    <div className="absolute bg-size-[384px_384px] bg-top-left h-[450px] left-0 overflow-clip right-[510px] rounded-[22.5px] shadow-[0px_15px_18.75px_-3.75px_rgba(0,0,0,0.1),0px_6px_7.5px_-4.5px_rgba(0,0,0,0.1)] top-0" data-name="Background+Shadow" style={{ backgroundImage: `url('${imgBackgroundShadow}')` }}>
      <div className="absolute bg-[rgba(45,75,45,0.2)] inset-0" data-name="Overlay" />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[450px] left-[240px] right-[240px] top-[72px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[30px] justify-center leading-[0] left-[510px] text-[#2d4b2d] text-[27px] top-[88.5px] w-[348.646px]">
        <p className="leading-[30px] whitespace-pre-wrap">The Science of Absorption</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[36.75px] justify-center leading-[0] left-[510px] text-[#a3b18a] text-[27px] top-[142.13px] w-[30.608px]">
        <p className="leading-[30px] whitespace-pre-wrap">01</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[21px] justify-center leading-[0] left-[558.46px] text-[#2d4b2d] text-[15px] top-[138px] w-[129.686px]">
        <p className="leading-[21px] whitespace-pre-wrap">Osmo-Interaction</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[34.5px] justify-center leading-[18px] left-[558.46px] text-[12px] text-[rgba(45,75,45,0.7)] top-[172.5px] w-[369.323px] whitespace-pre-wrap">
        <p className="mb-0">When body heat makes contact with the untreated wood, essential</p>
        <p>medicinal oils and resins are slowly released.</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[36.75px] justify-center leading-[0] left-[510px] text-[#a3b18a] text-[27px] top-[235.13px] w-[34.665px]">
        <p className="leading-[30px] whitespace-pre-wrap">02</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[21px] justify-center leading-[0] left-[562.52px] text-[#2d4b2d] text-[15px] top-[231px] w-[100.765px]">
        <p className="leading-[21px] whitespace-pre-wrap">Dermal Intake</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[34.5px] justify-center leading-[18px] left-[562.52px] text-[12px] text-[rgba(45,75,45,0.7)] top-[265.5px] w-[386.115px] whitespace-pre-wrap">
        <p className="mb-0">{`The skin—the body's largest organ—absorbs these natural therapeutic`}</p>
        <p>compounds during prolonged periods of rest.</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[36.75px] justify-center leading-[0] left-[510px] text-[#a3b18a] text-[27px] top-[328.13px] w-[34.313px]">
        <p className="leading-[30px] whitespace-pre-wrap">03</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[21px] justify-center leading-[0] left-[562.16px] text-[#2d4b2d] text-[15px] top-[324px] w-[125.077px]">
        <p className="leading-[21px] whitespace-pre-wrap">Energy Balancing</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[34.5px] justify-center leading-[18px] left-[562.16px] text-[12px] text-[rgba(45,75,45,0.7)] top-[358.5px] w-[374.992px] whitespace-pre-wrap">
        <p className="mb-0">{`Specific wood densities and grains are used to harmonize the body's`}</p>
        <p>magnetic field and nervous system.</p>
      </div>
      <BackgroundShadow2 />
    </div>
  );
}

function B4() {
  return (
    <div className="h-[594px] overflow-clip relative shrink-0 w-[1395px]" data-name="b5">
      <Container2 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[60px] leading-[0] left-[240px] right-[240px] text-center top-[72px]" data-name="Paragraph">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[30px] justify-center left-[calc(50%+0.12px)] text-[27px] text-white top-[15px] w-[248.834px]">
        <p className="leading-[30px] whitespace-pre-wrap">Biological Benefits</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[18px] justify-center left-[calc(50%+0.11px)] text-[#a3b18a] text-[12px] top-[51px] w-[224.757px]">
        <p className="leading-[18px] whitespace-pre-wrap">Proven results through consistent usage</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[43.5px] relative w-[36px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 43.5">
        <g id="Icon">
          <path d={svgPaths.p10fb9d70} fill="var(--fill-0, #A3B18A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14.25px] items-center left-[9.23px] top-[20.25px] w-[158.67px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon5 />
        </div>
      </div>
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[21px] justify-center leading-[0] relative shrink-0 text-[13.5px] text-center text-white w-full">
        <p className="leading-[21px] whitespace-pre-wrap">Micro-Circulation</p>
      </div>
      <div className="flex flex-col font-['Manrope:Light',sans-serif] font-light h-[31.313px] justify-center leading-[17.063px] relative shrink-0 text-[10.5px] text-[rgba(255,255,255,0.6)] text-center w-full whitespace-pre-wrap">
        <p className="mb-0">Boosts peripheral blood flow</p>
        <p>through passive heat stimulation.</p>
      </div>
    </div>
  );
}

function OverlayOverlayBlur() {
  return (
    <div className="absolute backdrop-blur-[1.5px] bg-[rgba(255,255,255,0.05)] inset-[0_735px_-1.88px_0] rounded-[18px]" data-name="Overlay+OverlayBlur">
      <Frame14 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[43.5px] relative w-[36px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 43.5">
        <g id="Icon">
          <path d={svgPaths.p2e6ff490} fill="var(--fill-0, #A3B18A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10.5px] items-center left-[7.23px] top-[20.25px] w-[162.675px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon6 />
        </div>
      </div>
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[21px] justify-center leading-[0] relative shrink-0 text-[13.5px] text-center text-white w-full">
        <p className="leading-[21px] whitespace-pre-wrap">Prana Flow</p>
      </div>
      <div className="flex flex-col font-['Manrope:Light',sans-serif] font-light h-[31.313px] justify-center leading-[17.063px] relative shrink-0 text-[10.5px] text-[rgba(255,255,255,0.6)] text-center w-full whitespace-pre-wrap">
        <p className="mb-0">Removes energetic blockages and</p>
        <p>restores natural vitality levels.</p>
      </div>
    </div>
  );
}

function OverlayOverlayBlur1() {
  return (
    <div className="absolute backdrop-blur-[1.5px] bg-[rgba(255,255,255,0.05)] inset-[0_489px_-1.87px_246px] rounded-[18px]" data-name="Overlay+OverlayBlur">
      <Frame15 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[43.5px] relative w-[36px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 43.5">
        <g id="Icon">
          <path d={svgPaths.pd299a00} fill="var(--fill-0, #A3B18A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10.5px] items-center left-[5.98px] top-[20.25px] w-[165.18px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon7 />
        </div>
      </div>
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[21px] justify-center leading-[0] relative shrink-0 text-[13.5px] text-center text-white w-full">
        <p className="leading-[21px] whitespace-pre-wrap">Stress Reduction</p>
      </div>
      <div className="flex flex-col font-['Manrope:Light',sans-serif] font-light h-[31.313px] justify-center leading-[17.063px] relative shrink-0 text-[10.5px] text-[rgba(255,255,255,0.6)] text-center w-full whitespace-pre-wrap">
        <p className="mb-0">Natural aromatic compounds lower</p>
        <p>cortisol levels in the blood.</p>
      </div>
    </div>
  );
}

function OverlayOverlayBlur2() {
  return (
    <div className="absolute backdrop-blur-[1.5px] bg-[rgba(255,255,255,0.05)] inset-[0_243px_-1.87px_492px] rounded-[18px]" data-name="Overlay+OverlayBlur">
      <Frame16 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[43.5px] relative w-[36px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 43.5">
        <g id="Icon">
          <path d={svgPaths.p25107680} fill="var(--fill-0, #A3B18A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10.5px] items-center left-[5.35px] top-[20.25px] w-[166.462px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon8 />
        </div>
      </div>
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[21px] justify-center leading-[0] relative shrink-0 text-[13.5px] text-center text-white w-full">
        <p className="leading-[21px] whitespace-pre-wrap">Immune Boost</p>
      </div>
      <div className="flex flex-col font-['Manrope:Light',sans-serif] font-light h-[31.313px] justify-center leading-[17.063px] relative shrink-0 text-[10.5px] text-[rgba(255,255,255,0.6)] text-center w-full whitespace-pre-wrap">
        <p className="mb-0">Daily detoxification supports a</p>
        <p>robust lymphatic system response.</p>
      </div>
    </div>
  );
}

function OverlayOverlayBlur3() {
  return (
    <div className="absolute backdrop-blur-[1.5px] bg-[rgba(255,255,255,0.05)] inset-[0_-3px_-1.87px_738px] rounded-[18px]" data-name="Overlay+OverlayBlur">
      <Frame17 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[163.125px] left-[240px] right-[240px] top-[180px]" data-name="Container">
      <OverlayOverlayBlur />
      <OverlayOverlayBlur1 />
      <OverlayOverlayBlur2 />
      <OverlayOverlayBlur3 />
    </div>
  );
}

function B5() {
  return (
    <div className="bg-[#2d4b2d] h-[415.125px] relative rounded-[7.5px] shrink-0 w-[1395px]" data-name="b6">
      <Paragraph />
      <Container3 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[54px] relative w-[45px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 54">
        <g id="Icon">
          <path d={svgPaths.pcd96c80} fill="var(--fill-0, #A3B18A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0 w-[61.605px]">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[30px] justify-center relative shrink-0 text-[27px] w-full">
        <p className="leading-[30px] whitespace-pre-wrap">1720</p>
      </div>
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[11.25px] justify-center relative shrink-0 text-[7.5px] tracking-[0.75px] uppercase w-full">
        <p className="leading-[11.25px] whitespace-pre-wrap">Founded</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0 w-[60.265px]">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[30px] justify-center relative shrink-0 text-[27px] w-full">
        <p className="leading-[30px] whitespace-pre-wrap">12+</p>
      </div>
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[11.25px] justify-center relative shrink-0 text-[7.5px] tracking-[0.75px] uppercase w-full">
        <p className="leading-[11.25px] whitespace-pre-wrap">Generations</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0 w-[73.11px]">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[30px] justify-center relative shrink-0 text-[27px] w-full">
        <p className="leading-[30px] whitespace-pre-wrap">100%</p>
      </div>
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[11.25px] justify-center relative shrink-0 text-[7.5px] tracking-[0.75px] uppercase w-full">
        <p className="leading-[11.25px] whitespace-pre-wrap">Authentic</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[136.5px] items-center leading-[0] relative shrink-0 text-[#2d4b2d]">
      <Frame22 />
      <Frame23 />
      <Frame24 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[39px] items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Manrope:Light',sans-serif] font-light h-[93.375px] justify-center leading-[24.375px] relative shrink-0 text-[15px] text-[rgba(45,75,45,0.8)] w-full whitespace-pre-wrap">
        <p className="mb-0">Born in the heart of Kerala, the land of Ayurveda, Thattil began as a small guild of royal</p>
        <p className="mb-0">carpenters. Today, we are the custodians of secret wood-treatment techniques that</p>
        <p className="mb-0">have remained unchanged since 1720. Every curve is carved with respect for the tree</p>
        <p>it came from.</p>
      </div>
      <Frame18 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[25.5px] items-center relative shrink-0 text-center w-full">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[30px] justify-center leading-[0] relative shrink-0 text-[#2d4b2d] text-[27px] w-full">
        <p className="leading-[30px] whitespace-pre-wrap">The 300-Year Legacy</p>
      </div>
      <Frame19 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[19.5px] items-center left-[411.54px] right-[411.54px] top-[72px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon9 />
        </div>
      </div>
      <Frame20 />
    </div>
  );
}

function Section() {
  return (
    <div className="h-[447.75px] overflow-clip relative shrink-0 w-[1395px]" data-name="Section">
      <div className="absolute inset-0 opacity-5" data-name="Gradient" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\'0 0 1395 447.75\' xmlns=\'http://www.w3.org/2000/svg\' preserveAspectRatio=\'none\'><rect x=\'0\' y=\'0\' height=\'100%\' width=\'100%\' fill=\'url(%23grad)\' opacity=\'1\'/><defs><radialGradient id=\'grad\' gradientUnits=\'userSpaceOnUse\' cx=\'0\' cy=\'0\' r=\'10\' gradientTransform=\'matrix(98.641 0 0 31.661 697.5 223.88)\'><stop stop-color=\'rgba(45,75,45,1)\' offset=\'0.014731\'/><stop stop-color=\'rgba(45,75,45,0)\' offset=\'0.014731\'/></radialGradient></defs></svg>')" }} />
      <Frame21 />
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="absolute bg-white border-[0.75px] border-[rgba(45,75,45,0.05)] border-solid inset-[66px_656px_0_0] rounded-[18px]" data-name="Background+Border">
      <div className="absolute bg-size-[266.49749755859375px_266.49749755859375px] bg-top-left h-[144px] left-[18px] right-[18px] rounded-[12px] top-[18px]" data-name="Image" style={{ backgroundImage: `url('${imgBackgroundShadow}')` }} />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[21px] justify-center leading-[0] left-[18px] text-[#2d4b2d] text-[15px] top-[190.5px] w-[108.917px]">
        <p className="leading-[21px] whitespace-pre-wrap">Bijasal (Venga)</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[31.313px] justify-center leading-[17.063px] left-[18px] text-[10.5px] text-[rgba(45,75,45,0.6)] top-[223.41px] w-[264.375px] whitespace-pre-wrap">
        <p className="mb-0">Known for its anti-diabetic and skin-healing properties.</p>
        <p>The primary choice for medicinal cots.</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[10.5px] justify-center leading-[0] left-[18px] text-[#a3b18a] text-[7.5px] top-[258.38px] tracking-[0.75px] uppercase w-[62.085px]">
        <p className="leading-[11.25px] whitespace-pre-wrap">Rare Quality</p>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="absolute bg-white border-[0.75px] border-[rgba(45,75,45,0.05)] border-solid inset-[66px_328px_0_328px] rounded-[18px]" data-name="Background+Border">
      <div className="absolute bg-size-[266.49749755859375px_266.49749755859375px] bg-top-left h-[144px] left-[18px] right-[18px] rounded-[12px] top-[18px]" data-name="Image" style={{ backgroundImage: `url('${imgImage}')` }} />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[21px] justify-center leading-[0] left-[18px] text-[#2d4b2d] text-[15px] top-[190.5px] w-[120.829px]">
        <p className="leading-[21px] whitespace-pre-wrap">Red Sandalwood</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[31.313px] justify-center leading-[17.063px] left-[18px] text-[10.5px] text-[rgba(45,75,45,0.6)] top-[223.41px] w-[256.605px] whitespace-pre-wrap">
        <p className="mb-0">Highly aromatic and cooling. Excellent for calming the</p>
        <p>Pitta dosha and reducing mental stress.</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[10.5px] justify-center leading-[0] left-[18px] text-[#a3b18a] text-[7.5px] top-[258.38px] tracking-[0.75px] uppercase w-[76.073px]">
        <p className="leading-[11.25px] whitespace-pre-wrap">Premium Choice</p>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="absolute bg-white border-[0.75px] border-[rgba(45,75,45,0.05)] border-solid inset-[66px_0_0_655.99px] rounded-[18px]" data-name="Background+Border">
      <div className="absolute bg-size-[266.5050048828125px_266.5050048828125px] bg-top-left h-[144px] left-[18px] right-[18px] rounded-[12px] top-[18px]" data-name="Image" style={{ backgroundImage: `url('${imgImage1}')` }} />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[21px] justify-center leading-[0] left-[18px] text-[#2d4b2d] text-[15px] top-[190.5px] w-[106.883px]">
        <p className="leading-[21px] whitespace-pre-wrap">Medicinal Teak</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[31.313px] justify-center leading-[17.063px] left-[18px] text-[10.5px] text-[rgba(45,75,45,0.6)] top-[223.41px] w-[265.485px] whitespace-pre-wrap">
        <p className="mb-0">Selected from specific old-growth forests for maximum</p>
        <p>structural stability and resin content.</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[10.5px] justify-center leading-[0] left-[18px] text-[#a3b18a] text-[7.5px] top-[258.38px] tracking-[0.75px] uppercase w-[66.698px]">
        <p className="leading-[11.25px] whitespace-pre-wrap">Foundational</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[349.875px] left-[240px] right-[240px] top-[72px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[30px] justify-center leading-[0] left-[calc(50%+0.12px)] text-[#2d4b2d] text-[27px] text-center top-[15px] w-[251.003px]">
        <p className="leading-[30px] whitespace-pre-wrap">{`Nature's Pharmacy`}</p>
      </div>
      <BackgroundBorder />
      <BackgroundBorder1 />
      <BackgroundBorder2 />
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-[rgba(254,250,224,0.3)] h-[493.875px] relative shrink-0 w-[1395px]" data-name="Section">
      <Container4 />
    </div>
  );
}

function BackgroundShadow3() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#2d4b2d] left-1/2 overflow-clip rounded-[7499.25px] shadow-[0px_7.5px_11.25px_-2.25px_rgba(0,0,0,0.1),0px_3px_4.5px_-3px_rgba(0,0,0,0.1)] size-[48px] top-0" data-name="Background+Shadow">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20.25px] justify-center leading-[0] left-[calc(50%+0.14px)] text-[15px] text-center text-white top-[calc(50%-0.38px)] w-[6.873px]">
        <p className="leading-[21px] whitespace-pre-wrap">1</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#faf9f6] inset-[78px_536px_0_0]" data-name="Background">
      <BackgroundShadow3 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[21px] justify-center leading-[0] left-[calc(50%+0.12px)] text-[#2d4b2d] text-[13.5px] text-center top-[82.5px] w-[67.965px]">
        <p className="leading-[21px] whitespace-pre-wrap">Activation</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[48.375px] justify-center leading-[17.063px] left-[calc(50%+0.07px)] text-[10.5px] text-[rgba(45,75,45,0.6)] text-center top-[129.94px] w-[190.717px] whitespace-pre-wrap">
        <p className="mb-0">Wipe the furniture with a slightly warm</p>
        <p className="mb-0">damp cloth to open the wood pores and</p>
        <p>release medicinal resins.</p>
      </div>
    </div>
  );
}

function BackgroundShadow4() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#2d4b2d] left-[calc(50%-0.01px)] overflow-clip rounded-[7499.25px] shadow-[0px_7.5px_11.25px_-2.25px_rgba(0,0,0,0.1),0px_3px_4.5px_-3px_rgba(0,0,0,0.1)] size-[48px] top-0" data-name="Background+Shadow">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20.25px] justify-center leading-[0] left-[calc(50%+0.13px)] text-[15px] text-center text-white top-[calc(50%-0.38px)] w-[9.192px]">
        <p className="leading-[21px] whitespace-pre-wrap">2</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-[#faf9f6] inset-[78px_268px_0_268px]" data-name="Background">
      <BackgroundShadow4 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[21px] justify-center leading-[0] left-[calc(50%+0.11px)] text-[#2d4b2d] text-[13.5px] text-center top-[82.5px] w-[97.163px]">
        <p className="leading-[21px] whitespace-pre-wrap">Direct Contact</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[48.375px] justify-center leading-[17.063px] left-[calc(50%+0.07px)] text-[10.5px] text-[rgba(45,75,45,0.6)] text-center top-[129.94px] w-[200.588px] whitespace-pre-wrap">
        <p className="mb-0">Use the piece directly or with thin organic</p>
        <p className="mb-0">cotton sheets to ensure maximum dermal</p>
        <p>absorption of oils.</p>
      </div>
    </div>
  );
}

function BackgroundShadow5() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#2d4b2d] left-1/2 overflow-clip rounded-[7499.25px] shadow-[0px_7.5px_11.25px_-2.25px_rgba(0,0,0,0.1),0px_3px_4.5px_-3px_rgba(0,0,0,0.1)] size-[48px] top-0" data-name="Background+Shadow">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20.25px] justify-center leading-[0] left-[calc(50%+0.12px)] text-[15px] text-center text-white top-[calc(50%-0.38px)] w-[8.98px]">
        <p className="leading-[21px] whitespace-pre-wrap">3</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-[#faf9f6] inset-[78px_0_0_535.99px]" data-name="Background">
      <BackgroundShadow5 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[21px] justify-center leading-[0] left-[calc(50%+0.12px)] text-[#2d4b2d] text-[13.5px] text-center top-[82.5px] w-[59.183px]">
        <p className="leading-[21px] whitespace-pre-wrap">Oil Ritual</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[48.375px] justify-center leading-[17.063px] left-[calc(50%+0.08px)] text-[10.5px] text-[rgba(45,75,45,0.6)] text-center top-[129.94px] w-[198.435px] whitespace-pre-wrap">
        <p className="mb-0">Once every six months, apply our</p>
        <p className="mb-0">proprietary herbal oil to nourish the wood</p>
        <p>and maintain its therapeutic potency.</p>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="h-[234.188px] relative shrink-0 w-[723px]" data-name="Section">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[30px] justify-center leading-[0] left-[calc(50%+0.14px)] text-[#2d4b2d] text-[27px] text-center top-[15px] w-[351.407px]">
        <p className="leading-[30px] whitespace-pre-wrap">How to Begin Your Journey</p>
      </div>
      <div className="-translate-y-1/2 absolute bg-[rgba(45,75,45,0.05)] h-[0.75px] left-0 right-0 top-[calc(50%+39px)]" data-name="Horizontal Divider" />
      <Background />
      <Background1 />
      <Background2 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[21px] relative w-[18.015px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.015 21">
        <g id="Icon">
          <path d={svgPaths.pef9d00} fill="var(--fill-0, #A3B18A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[21px] relative w-[18.015px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.015 21">
        <g id="Icon">
          <path d={svgPaths.p395fdfc0} fill="var(--fill-0, #A3B18A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[16.5px] left-[18px] overflow-clip right-[18px] top-[12.75px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-0 text-[#6b7280] text-[12px] top-[8.25px] w-[51.724px]">
        <p className="leading-[normal] whitespace-pre-wrap">John Doe</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-[rgba(245,235,224,0.2)] h-[42px] left-0 overflow-clip right-[204px] rounded-[18px] top-[17.25px]" data-name="Input">
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[16.5px] left-[18px] overflow-clip right-[18px] top-[12.75px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-0 text-[#6b7280] text-[12px] top-[8.25px] w-[108.594px]">
        <p className="leading-[normal] whitespace-pre-wrap">john@example.com</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute bg-[rgba(245,235,224,0.2)] h-[42px] left-[204px] overflow-clip right-0 rounded-[18px] top-[17.25px]" data-name="Input">
      <Container7 />
    </div>
  );
}

function Image2() {
  return (
    <div className="-translate-y-1/2 absolute right-[6px] size-[18px] top-1/2" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="image">
          <path d={svgPaths.p3f137680} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill() {
  return (
    <div className="absolute h-[42px] left-0 overflow-clip top-0 w-[390px]" data-name="image fill">
      <Image2 />
    </div>
  );
}

function Container8() {
  return (
    <div className="-translate-y-1/2 absolute h-[18px] left-[18px] overflow-clip right-[18px] top-1/2" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-0 text-[#2d4b2d] text-[12px] top-[9px] w-[134.437px]">
        <p className="leading-[18px] whitespace-pre-wrap">Back Pain / Spinal Issues</p>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="absolute bg-[rgba(245,235,224,0.2)] h-[42px] left-0 right-0 rounded-[18px] top-[94.5px]" data-name="Options">
      <ImageFill />
      <Container8 />
    </div>
  );
}

function Textarea() {
  return (
    <div className="absolute bg-[rgba(245,235,224,0.2)] h-[96px] left-0 overflow-auto right-0 rounded-[18px] top-[171.75px]" data-name="Textarea">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-[18px] text-[#6b7280] text-[12px] top-[21px] w-[121.159px]">
        <p className="leading-[18px] whitespace-pre-wrap">How can we help you?</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#2d4b2d] h-[48px] left-0 right-0 rounded-[12px] top-[285.75px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[16.5px] justify-center leading-[0] left-[calc(50%+0.07px)] text-[12px] text-center text-white top-1/2 tracking-[1.2px] uppercase w-[98.438px]">
        <p className="leading-[18px] whitespace-pre-wrap">Send Inquiry</p>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="absolute h-[333.75px] left-[30px] right-[30px] top-[30px]" data-name="Form">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[10.5px] justify-center leading-[0] left-0 opacity-50 text-[#2d4b2d] text-[7.5px] top-[5.25px] tracking-[0.75px] uppercase w-[46.725px]">
        <p className="leading-[11.25px] whitespace-pre-wrap">Full Name</p>
      </div>
      <Input />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[10.5px] justify-center leading-[0] left-[204px] opacity-50 text-[#2d4b2d] text-[7.5px] top-[5.25px] tracking-[0.75px] uppercase w-[67.874px]">
        <p className="leading-[11.25px] whitespace-pre-wrap">Email Address</p>
      </div>
      <Input1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[10.5px] justify-center leading-[0] left-0 opacity-50 text-[#2d4b2d] text-[7.5px] top-[82.5px] tracking-[0.75px] uppercase w-[117.008px]">
        <p className="leading-[11.25px] whitespace-pre-wrap">Primary Health Concern</p>
      </div>
      <Options />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[10.5px] justify-center leading-[0] left-0 opacity-50 text-[#2d4b2d] text-[7.5px] top-[159.75px] tracking-[0.75px] uppercase w-[41.007px]">
        <p className="leading-[11.25px] whitespace-pre-wrap">Message</p>
      </div>
      <Textarea />
      <Button3 />
    </div>
  );
}

function BackgroundShadow6() {
  return (
    <div className="absolute bg-white h-[405.75px] left-[510px] overflow-clip right-0 rounded-[24px] shadow-[0px_18.75px_37.5px_-9px_rgba(0,0,0,0.25)] top-0" data-name="Background+Shadow">
      <Form />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[405.75px] left-[240px] right-[240px] top-[72px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[84.75px] justify-center leading-[36px] left-0 text-[36px] text-white top-[114px] w-[331.103px] whitespace-pre-wrap">
        <p className="mb-0">Begin Your Healing</p>
        <p>Consultation</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[60px] justify-center leading-[21px] left-0 text-[13.5px] text-[rgba(255,255,255,0.7)] top-[205.88px] w-[447.293px] whitespace-pre-wrap">
        <p className="mb-0">Every individual has unique health needs. Share your wellness goals, and</p>
        <p className="mb-0">our experts will suggest the ideal wood combinations for your custom</p>
        <p>furniture.</p>
      </div>
      <div className="absolute flex h-[21px] items-center justify-center left-0 top-[271.88px] w-[18.015px]">
        <div className="-scale-y-100 flex-none">
          <Icon10 />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[18px] justify-center leading-[0] left-[30.02px] text-[12px] text-white top-[282.38px] w-[102.897px]">
        <p className="leading-[18px] whitespace-pre-wrap">+91 9847 000 000</p>
      </div>
      <div className="absolute flex h-[21px] items-center justify-center left-0 top-[307.88px] w-[18.015px]">
        <div className="-scale-y-100 flex-none">
          <Icon11 />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[18px] justify-center leading-[0] left-[30.02px] text-[12px] text-white top-[318.38px] w-[169.969px]">
        <p className="leading-[18px] whitespace-pre-wrap">healing@thattilwellness.com</p>
      </div>
      <BackgroundShadow6 />
    </div>
  );
}

function Section3() {
  return (
    <div className="bg-[#603808] h-[549.75px] relative rounded-tl-[36px] rounded-tr-[36px] shrink-0 w-full" data-name="Section">
      <Container5 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[27px] relative w-[22.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 27">
        <g id="Icon">
          <path d={svgPaths.p2e6e8280} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[12px] relative w-[10.515px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.515 12">
        <g id="Icon">
          <path d={svgPaths.pe0ead00} fill="var(--fill-0, white)" fillOpacity="0.8" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] left-0 rounded-[7499.25px] size-[30px] top-[114.19px]" data-name="Link">
      <div className="absolute flex h-[12px] items-center justify-center left-[9.73px] top-[9px] w-[10.515px]">
        <div className="-scale-y-100 flex-none">
          <Icon13 />
        </div>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="h-[12px] relative w-[10.515px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.515 12">
        <g id="Icon">
          <path d={svgPaths.p133f6080} fill="var(--fill-0, white)" fillOpacity="0.8" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] left-[42px] rounded-[7499.25px] size-[30px] top-[114.19px]" data-name="Link">
      <div className="absolute flex h-[12px] items-center justify-center left-[9.73px] top-[9px] w-[10.515px]">
        <div className="-scale-y-100 flex-none">
          <Icon14 />
        </div>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="h-[12px] relative w-[10.515px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.515 12">
        <g id="Icon">
          <path d={svgPaths.p3d59cc00} fill="var(--fill-0, white)" fillOpacity="0.8" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] left-[84px] rounded-[7499.25px] size-[30px] top-[114.19px]" data-name="Link">
      <div className="absolute flex h-[12px] items-center justify-center left-[9.73px] top-[9px] w-[10.515px]">
        <div className="-scale-y-100 flex-none">
          <Icon15 />
        </div>
      </div>
    </div>
  );
}

function ItemLink() {
  return (
    <div className="absolute h-[14.25px] left-0 top-0 w-[84.285px]" data-name="Item → Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Light',sans-serif] font-light h-[14.25px] justify-center leading-[0] left-0 text-[10.5px] text-[rgba(255,255,255,0.8)] top-[7.13px] w-[84.566px]">
        <p className="leading-[15px] whitespace-pre-wrap">The Wood Legacy</p>
      </div>
    </div>
  );
}

function ItemLink1() {
  return (
    <div className="absolute h-[14.25px] left-0 top-[27px] w-[58.748px]" data-name="Item → Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Light',sans-serif] font-light h-[14.25px] justify-center leading-[0] left-0 text-[10.5px] text-[rgba(255,255,255,0.8)] top-[7.13px] w-[58.988px]">
        <p className="leading-[15px] whitespace-pre-wrap">Our Artisans</p>
      </div>
    </div>
  );
}

function ItemLink2() {
  return (
    <div className="absolute h-[14.25px] left-0 top-[54px] w-[65.205px]" data-name="Item → Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Light',sans-serif] font-light h-[14.25px] justify-center leading-[0] left-0 text-[10.5px] text-[rgba(255,255,255,0.8)] top-[7.13px] w-[65.456px]">
        <p className="leading-[15px] whitespace-pre-wrap">Certifications</p>
      </div>
    </div>
  );
}

function ItemLink3() {
  return (
    <div className="absolute h-[14.25px] left-0 top-[81px] w-[69.847px]" data-name="Item → Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Light',sans-serif] font-light h-[14.25px] justify-center leading-[0] left-0 text-[10.5px] text-[rgba(255,255,255,0.8)] top-[7.13px] w-[70.105px]">
        <p className="leading-[15px] whitespace-pre-wrap">Visit Workshop</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="absolute h-[96px] left-[249px] right-[498px] top-[30px]" data-name="List">
      <ItemLink />
      <ItemLink1 />
      <ItemLink2 />
      <ItemLink3 />
    </div>
  );
}

function ItemLink4() {
  return (
    <div className="absolute h-[14.25px] left-0 top-0 w-[58.433px]" data-name="Item → Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Light',sans-serif] font-light h-[14.25px] justify-center leading-[0] left-0 text-[10.5px] text-[rgba(255,255,255,0.8)] top-[7.13px] w-[58.673px]">
        <p className="leading-[15px] whitespace-pre-wrap">The Science</p>
      </div>
    </div>
  );
}

function ItemLink5() {
  return (
    <div className="absolute h-[14.25px] left-0 top-[27px] w-[92.482px]" data-name="Item → Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Light',sans-serif] font-light h-[14.25px] justify-center leading-[0] left-0 text-[10.5px] text-[rgba(255,255,255,0.8)] top-[7.13px] w-[92.776px]">
        <p className="leading-[15px] whitespace-pre-wrap">Maintenance Guide</p>
      </div>
    </div>
  );
}

function ItemLink6() {
  return (
    <div className="absolute h-[14.25px] left-0 top-[54px] w-[73.538px]" data-name="Item → Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Light',sans-serif] font-light h-[14.25px] justify-center leading-[0] left-0 text-[10.5px] text-[rgba(255,255,255,0.8)] top-[7.13px] w-[73.801px]">
        <p className="leading-[15px] whitespace-pre-wrap">Health Benefits</p>
      </div>
    </div>
  );
}

function ItemLink7() {
  return (
    <div className="absolute h-[14.25px] left-0 top-[81px] w-[94.522px]" data-name="Item → Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Light',sans-serif] font-light h-[14.25px] justify-center leading-[0] left-0 text-[10.5px] text-[rgba(255,255,255,0.8)] top-[7.13px] w-[94.819px]">
        <p className="leading-[15px] whitespace-pre-wrap">Dosha Consultation</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="absolute h-[96px] left-[498px] right-[249px] top-[30px]" data-name="List">
      <ItemLink4 />
      <ItemLink5 />
      <ItemLink6 />
      <ItemLink7 />
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute bottom-0 left-[786.1px] top-[24px] w-[69.022px]" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[10.5px] justify-center leading-[0] left-0 text-[7.5px] text-[rgba(255,255,255,0.8)] top-[5.25px] tracking-[0.75px] uppercase w-[69.279px]">
        <p className="leading-[11.25px] whitespace-pre-wrap">Privacy Policy</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute bottom-0 left-[879.12px] top-[24px] w-[80.88px]" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[10.5px] justify-center leading-[0] left-0 text-[7.5px] text-[rgba(255,255,255,0.8)] top-[5.25px] tracking-[0.75px] uppercase w-[81.155px]">
        <p className="leading-[11.25px] whitespace-pre-wrap">Terms of Service</p>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t-[0.75px] h-[36px] left-0 right-0 top-[192.19px]" data-name="HorizontalBorder">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[11.25px] justify-center leading-[0] left-0 text-[7.5px] text-[rgba(255,255,255,0.8)] top-[29.63px] tracking-[0.75px] uppercase w-[269.858px]">
        <p className="leading-[11.25px] whitespace-pre-wrap">© 2024 Thattil Ayurvedic Wellness. All rights reserved.</p>
      </div>
      <Link5 />
      <Link6 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[228.188px] left-[240px] right-[240px] top-[48.75px]" data-name="Container">
      <div className="absolute flex h-[27px] items-center justify-center left-0 top-0 w-[22.5px]">
        <div className="-scale-y-100 flex-none">
          <Icon12 />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[21px] justify-center leading-[0] left-[28.5px] text-[15px] text-white top-[13.5px] tracking-[-0.75px] uppercase w-[126.103px]">
        <p className="whitespace-pre-wrap">
          <span className="leading-[21px]">{`Thattil `}</span>
          <span className="font-['Manrope:Light',sans-serif] font-light leading-[21px]">Wellness</span>
        </p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[48.375px] justify-center leading-[17.063px] left-0 text-[10.5px] text-[rgba(255,255,255,0.8)] top-[69.94px] w-[200.798px] whitespace-pre-wrap">
        <p className="mb-0">Crafting medicinal wood furniture since</p>
        <p className="mb-0">1720. A legacy of health and tradition from</p>
        <p>Kerala, India.</p>
      </div>
      <Link2 />
      <Link3 />
      <Link4 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] left-[249px] text-[9px] text-white top-[6px] tracking-[0.9px] uppercase w-[50.643px]">
        <p className="leading-[12px] whitespace-pre-wrap">Heritage</p>
      </div>
      <List />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] left-[498px] text-[9px] text-white top-[6px] tracking-[0.9px] uppercase w-[54.729px]">
        <p className="leading-[12px] whitespace-pre-wrap">Wellness</p>
      </div>
      <List1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] left-[747px] text-[9px] text-white top-[6px] tracking-[0.9px] uppercase w-[43.34px]">
        <p className="leading-[12px] whitespace-pre-wrap">Visit Us</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Light',sans-serif] font-light h-[65.438px] justify-center leading-[17.063px] left-[747px] text-[10.5px] text-[rgba(255,255,255,0.8)] top-[63.47px] w-[109.23px] whitespace-pre-wrap">
        <p className="mb-0">Thattil Workshop,</p>
        <p className="mb-0">Ayurvedic Village Road,</p>
        <p className="mb-0">Thrissur, Kerala 680001</p>
        <p>India</p>
      </div>
      <HorizontalBorder />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#2d4b2d] h-[324.75px] relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t-[0.75px] inset-0 pointer-events-none" />
      <Container9 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1440px]">
      <Section3 />
      <Footer />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#faf9f6] content-stretch flex flex-col gap-[24px] items-center px-[22.5px] relative size-full" data-name="1440">
      <Header />
      <B />
      <Frame8 />
      <Frame9 />
      <B3 />
      <B4 />
      <B5 />
      <Section />
      <Section1 />
      <Section2 />
      <Frame25 />
    </div>
  );
}