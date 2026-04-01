import svgPaths from "./svg-gt0k36u9dm";

function Icon() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.83%_8.27%_37.5%_8.34%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0152 12.0007">
            <path d={svgPaths.p15891e00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_8.33%_33.33%_91.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 8">
            <path d="M1 1V7" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/4 right-1/4 top-[52.08%]" data-name="Vector">
        <div className="absolute inset-[-15.38%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 8.5">
            <path d={svgPaths.p26770600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative rounded-[10px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 size-[40px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(43, 127, 255) 0%, rgb(0, 187, 167) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[36px] relative shrink-0 w-[166.85px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute bg-clip-text font-['Inter:Medium',sans-serif] font-medium leading-[36px] left-0 not-italic text-[24px] text-[rgba(0,0,0,0)] top-[-2.4px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(21, 93, 252) 0%, rgb(0, 150, 137) 100%)", WebkitTextFillColor: "transparent" }}>
          Result Analyzer
        </p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="bg-[#dbeafe] h-[19.988px] relative rounded-[4px] shrink-0 w-[37.288px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[8px] py-[2px] relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1447e6] text-[12px]">v1.0</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Text />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px]">Analyze and visualize engineering exam results</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[51.987px] relative shrink-0 w-[247.55px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container4 />
        <Paragraph />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[51.987px] relative shrink-0 w-[299.55px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container2 />
        <Container3 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
            <path d={svgPaths.p9bfa300} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[10px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Button />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[51.987px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container5 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[84.787px] items-start left-0 pb-[0.8px] pt-[16px] px-[24px] top-0 w-[1152px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Container />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p1b91d620} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p76546be} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M13.3333 12H10.6667" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M21.3333 17.3333H10.6667" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M21.3333 22.6667H10.6667" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative rounded-[14px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0 size-[56px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(43, 127, 255) 0%, rgb(0, 187, 167) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute content-stretch flex h-[31.988px] items-start left-0 top-0 w-[389.462px]" data-name="Heading 2">
      <p className="bg-clip-text flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[32px] min-h-px min-w-px not-italic relative text-[24px] text-[rgba(0,0,0,0)] whitespace-pre-wrap" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(16, 24, 40) 0%, rgb(54, 65, 83) 100%)", WebkitTextFillColor: "transparent" }}>
        Analysis Results
      </p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[-0.2px]">2019 Sem 3.pdf</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#f3f4f6] h-[33.6px] relative rounded-[10px] shrink-0 w-[122.6px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.8px] pt-[6.8px] px-[12.8px] relative size-full">
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex h-[33.6px] items-center left-0 top-[39.99px] w-[389.462px]" data-name="Container">
      <Container13 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[12px] size-[14px] top-[9px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p25182e80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M1.75 1.75V4.66667H4.66667" id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#eff6ff] border-[#bedbff] border-[0.8px] border-solid h-[33.6px] left-0 rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[81.59px] w-[172.137px]" data-name="Button">
      <Icon3 />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[95px] not-italic text-[#155dfc] text-[14px] text-center top-[5.8px]">Analyze another file</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="flex-[1_0_0] h-[115.188px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading1 />
        <Container12 />
        <Button1 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="flex-[1_0_0] h-[115.188px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <Container10 />
        <Container11 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19416e00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3e059a80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 12V8" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6 10L8 12L10 10" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-gradient-to-r from-[#615fff] h-[32px] relative rounded-[8px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0 to-[#4f39f6] w-[112.813px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon4 />
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[67px] not-italic text-[14px] text-center text-white top-[5.8px]">Export PDF</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19416e00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3e059a80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 8.66667H6.66667" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33333 8.66667H10.6667" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 11.3333H6.66667" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33333 11.3333H10.6667" id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-gradient-to-r from-[#00bc7d] h-[32px] relative rounded-[8px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0 to-[#096] w-[119.325px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon5 />
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[71px] not-italic text-[14px] text-center text-white top-[5.8px]">Export Excel</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[32px] relative shrink-0 w-[240.137px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Button2 />
        <Button3 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute content-stretch flex h-[15.988px] items-start left-[24.8px] top-0 w-[280px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#4a5565] text-[12px] text-right whitespace-pre-wrap">Department</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[28px] left-[24.8px] top-[17.99px] w-[280px]" data-name="Paragraph">
      <p className="-translate-x-full absolute bg-clip-text font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-[280.92px] not-italic text-[18px] text-[rgba(0,0,0,0)] text-right top-[-1.4px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(21, 93, 252) 0%, rgb(0, 150, 137) 100%)", WebkitTextFillColor: "transparent" }}>
        Civil Engineering
      </p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px] text-right whitespace-pre-wrap">Wish to change?</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] h-[15.988px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] text-center">Civil Engineering</p>
      </div>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[91.388px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <Text1 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12.8px] py-[0.8px] relative size-full">
          <PrimitiveSpan />
          <Icon6 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[55.987px] items-start left-[24.8px] top-[51.99px] w-[280px]" data-name="Container">
      <Paragraph4 />
      <PrimitiveButton />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[107.975px] relative shrink-0 w-[304.8px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-l-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph2 />
        <Paragraph3 />
        <Container17 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[107.975px] relative shrink-0 w-[568.938px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative size-full">
        <Container15 />
        <Container16 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[115.188px] relative shrink-0 w-[1054.4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Container9 />
        <Container14 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[164.788px] relative rounded-[14px] shrink-0 w-full" data-name="Container" style={{ backgroundImage: "linear-gradient(171.51deg, rgb(255, 255, 255) 0%, rgb(249, 250, 251) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col items-start pb-[0.8px] pl-[24.8px] pr-[0.8px] pt-[24.8px] relative size-full">
        <Container8 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p184ba090} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p5d36b00} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p2f1426c0} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p25f79f00} id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1447e6] text-[12px]">Total Students</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#1c398e] text-[20px] top-[-1.2px]">156</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[43.987px] relative shrink-0 w-[74.65px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph5 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[43.987px] relative shrink-0 w-[177.6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Icon7 />
        <Container21 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col h-[77.588px] items-start left-0 pb-[0.8px] pl-[16.8px] pr-[0.8px] pt-[16.8px] rounded-[14px] top-0 w-[211.2px]" data-name="Container" style={{ backgroundImage: "linear-gradient(159.828deg, rgb(239, 246, 255) 0%, rgb(219, 234, 254) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[#bedbff] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container20 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p3997a780} id="Vector" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p275e0300} id="Vector_2" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#007a55] text-[12px]">Average Score</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#004f3b] text-[20px] top-[-1.2px]">76.5%</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[43.987px] relative shrink-0 w-[75.838px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph7 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[43.987px] relative shrink-0 w-[177.6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Icon8 />
        <Container24 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col h-[77.588px] items-start left-[223.2px] pb-[0.8px] pl-[16.8px] pr-[0.8px] pt-[16.8px] rounded-[14px] top-0 w-[211.2px]" data-name="Container" style={{ backgroundImage: "linear-gradient(159.828deg, rgb(236, 253, 245) 0%, rgb(208, 250, 229) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[#a4f4cf] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container23 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p2ada2820} id="Vector" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p4cb2400} id="Vector_2" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#00786f] text-[12px]">Pass Rate</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#0b4f4a] text-[20px] top-[-1.2px]">89.7%</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[43.987px] relative shrink-0 w-[57.288px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph9 />
        <Paragraph10 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[43.987px] relative shrink-0 w-[177.6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Icon9 />
        <Container27 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col h-[77.588px] items-start left-[446.4px] pb-[0.8px] pl-[16.8px] pr-[0.8px] pt-[16.8px] rounded-[14px] top-0 w-[211.2px]" data-name="Container" style={{ backgroundImage: "linear-gradient(159.828deg, rgb(240, 253, 250) 0%, rgb(203, 251, 241) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[#96f7e4] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container26 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p3c56a600} id="Vector" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p4334a48} id="Vector_2" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M4.66667 25.6667H23.3333" id="Vector_3" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p1c650200} id="Vector_4" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p248a3980} id="Vector_5" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p1490c980} id="Vector_6" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#bb4d00] text-[12px]">Toppers</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#7b3306] text-[20px] top-[-1.2px]">22</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[43.987px] relative shrink-0 w-[41.8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph11 />
        <Paragraph12 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[43.987px] relative shrink-0 w-[177.6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Icon10 />
        <Container30 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex flex-col h-[77.588px] items-start left-[669.6px] pb-[0.8px] pl-[16.8px] pr-[0.8px] pt-[16.8px] rounded-[14px] top-0 w-[211.2px]" data-name="Container" style={{ backgroundImage: "linear-gradient(159.828deg, rgb(255, 251, 235) 0%, rgb(254, 243, 198) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[#fee685] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container29 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p184ba090} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p5d36b00} id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p2dffd980} id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p22d93380} id="Vector_4" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#c10007] text-[12px]">Students Failed</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#82181a] text-[20px] top-[-1.2px]">10</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[43.987px] relative shrink-0 w-[80.138px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph13 />
        <Paragraph14 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[43.987px] relative shrink-0 w-[177.6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Icon11 />
        <Container33 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col h-[77.588px] items-start left-[892.8px] pb-[0.8px] pl-[16.8px] pr-[0.8px] pt-[16.8px] rounded-[14px] top-0 w-[211.2px]" data-name="Container" style={{ backgroundImage: "linear-gradient(159.828deg, rgb(254, 242, 242) 0%, rgb(255, 228, 230) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[#ffc9c9] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container32 />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[77.588px] relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container22 />
      <Container25 />
      <Container28 />
      <Container31 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[28px] relative shrink-0 w-[1070.4px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-[-1.4px]">Student Results</p>
      </div>
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.2)] border-r-[0.8px] border-solid h-[44px] left-0 top-0 w-[147.838px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[16px] not-italic text-[14px] text-white top-[11.8px]">Register No</p>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.2)] border-r-[0.8px] border-solid h-[44px] left-[147.84px] top-0 w-[88.65px]" data-name="Header Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[44.49px] not-italic text-[14px] text-center text-white top-[11.8px]">EST200</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.2)] border-r-[0.8px] border-solid h-[44px] left-[236.49px] top-0 w-[107.162px]" data-name="Header Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[54.4px] not-italic text-[14px] text-center text-white top-[11.8px]">MCN201</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.2)] border-r-[0.8px] border-solid h-[44px] left-[343.65px] top-0 w-[97.188px]" data-name="Header Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[48.27px] not-italic text-[14px] text-center text-white top-[11.8px]">MAT203</p>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.2)] border-r-[0.8px] border-solid h-[44px] left-[440.84px] top-0 w-[90.225px]" data-name="Header Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[45.14px] not-italic text-[14px] text-center text-white top-[11.8px]">CST201</p>
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.2)] border-r-[0.8px] border-solid h-[44px] left-[531.06px] top-0 w-[90.225px]" data-name="Header Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[45.14px] not-italic text-[14px] text-center text-white top-[11.8px]">CST203</p>
    </div>
  );
}

function HeaderCell6() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.2)] border-r-[0.8px] border-solid h-[44px] left-[621.29px] top-0 w-[90.225px]" data-name="Header Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[45.14px] not-italic text-[14px] text-center text-white top-[11.8px]">CST205</p>
    </div>
  );
}

function HeaderCell7() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.2)] border-r-[0.8px] border-solid h-[44px] left-[711.51px] top-0 w-[88.938px]" data-name="Header Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[45.01px] not-italic text-[14px] text-center text-white top-[11.8px]">CSL201</p>
    </div>
  );
}

function HeaderCell8() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.2)] border-r-[0.8px] border-solid h-[44px] left-[800.45px] top-0 w-[88.938px]" data-name="Header Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[44.51px] not-italic text-[14px] text-center text-white top-[11.8px]">CSL203</p>
    </div>
  );
}

function HeaderCell9() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.2)] border-r-[0.8px] border-solid h-[44px] left-[889.39px] top-0 w-[74.263px]" data-name="Header Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[37.18px] not-italic text-[14px] text-center text-white top-[11.8px]">CGPA</p>
    </div>
  );
}

function HeaderCell10() {
  return (
    <div className="absolute h-[44px] left-[963.65px] top-0 w-[105.15px]" data-name="Header Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[53.04px] not-italic text-[14px] text-center text-white top-[11.8px]">No_Arrea</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute bg-gradient-to-r from-[#155dfc] h-[44px] left-0 to-[#009689] top-0 w-[1068.8px]" data-name="Table Row">
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
      <HeaderCell3 />
      <HeaderCell4 />
      <HeaderCell5 />
      <HeaderCell6 />
      <HeaderCell7 />
      <HeaderCell8 />
      <HeaderCell9 />
      <HeaderCell10 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute h-[44px] left-0 top-0 w-[1068.8px]" data-name="Table Header">
      <TableRow />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[49.987px] left-0 top-0 w-[147.838px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[16px] not-italic text-[#101828] text-[14px] top-[14.59px]">CMA19CS001</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute bg-[#ffb900] content-stretch flex h-[23.988px] items-start left-[24.34px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[13.6px] w-[39.975px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">C+</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[49.987px] left-[147.84px] top-0 w-[88.65px]" data-name="Table Cell">
      <Text2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[38.21px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[13.6px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[49.987px] left-[236.49px] top-0 w-[107.162px]" data-name="Table Cell">
      <Text3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[33.46px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[13.6px] w-[30.25px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">F</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[49.987px] left-[343.65px] top-0 w-[97.188px]" data-name="Table Cell">
      <Text4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[29.99px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[13.6px] w-[30.25px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">F</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[49.987px] left-[440.84px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text5 />
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[29.99px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[13.6px] w-[30.25px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">F</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[49.987px] left-[531.06px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text6 />
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[29.99px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[13.6px] w-[30.25px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">F</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[49.987px] left-[621.29px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text7 />
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute bg-[#00a63e] content-stretch flex h-[23.988px] items-start left-[28.25px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[13.6px] w-[32.438px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[49.987px] left-[711.51px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text8 />
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute bg-[#fb2c36] content-stretch flex h-[23.988px] items-start left-[28.78px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[13.6px] w-[31.375px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">P</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[49.987px] left-[800.45px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text9 />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[49.987px] left-[889.39px] top-0 w-[74.263px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[37.1px] not-italic text-[#101828] text-[14px] text-center top-[14.59px]">0</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[37.11px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[13.6px] w-[30.913px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">4</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[49.987px] left-[963.65px] top-0 w-[105.15px]" data-name="Table Cell">
      <Text10 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute bg-[#f9fafb] h-[49.987px] left-0 top-0 w-[1068.8px]" data-name="Table Row">
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-0 top-0 w-[147.838px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[16px] not-italic text-[#101828] text-[14px] top-[14.99px]">CMA19CS002</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[29.2px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.25px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">F</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[147.84px] top-0 w-[88.65px]" data-name="Table Cell">
      <Text11 />
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[38.21px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[236.49px] top-0 w-[107.162px]" data-name="Table Cell">
      <Text12 />
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute bg-[#ff6900] content-stretch flex h-[23.988px] items-start left-[32.16px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.85px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">D</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[343.65px] top-0 w-[97.188px]" data-name="Table Cell">
      <Text13 />
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute bg-[#fe9a00] content-stretch flex h-[23.988px] items-start left-[29.36px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.5px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">C</p>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[440.84px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text14 />
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute bg-[#fe9a00] content-stretch flex h-[23.988px] items-start left-[29.36px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.5px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">C</p>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[531.06px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text15 />
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute bg-[#fe9a00] content-stretch flex h-[23.988px] items-start left-[29.36px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.5px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">C</p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[621.29px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text16 />
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute bg-[#00a63e] content-stretch flex h-[23.988px] items-start left-[28.25px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.438px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[711.51px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text17 />
    </div>
  );
}

function Text18() {
  return (
    <div className="absolute bg-[#2b7fff] content-stretch flex h-[23.988px] items-start left-[28.61px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.7px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">B</p>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[800.45px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text18 />
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[889.39px] top-0 w-[74.263px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[37.1px] not-italic text-[#101828] text-[14px] text-center top-[14.99px]">0</p>
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[37.11px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.913px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[16px] min-h-px min-w-px not-italic relative text-[12px] text-center text-white whitespace-pre-wrap">1</p>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[963.65px] top-0 w-[105.15px]" data-name="Table Cell">
      <Text19 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute bg-white h-[50.388px] left-0 top-[49.99px] w-[1068.8px]" data-name="Table Row">
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
      <TableCell20 />
      <TableCell21 />
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-0 top-0 w-[147.838px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[16px] not-italic text-[#101828] text-[14px] top-[14.99px]">CMA19CS003</p>
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[29.2px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.25px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">F</p>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[147.84px] top-0 w-[88.65px]" data-name="Table Cell">
      <Text20 />
    </div>
  );
}

function Text21() {
  return (
    <div className="absolute bg-[#00c950] content-stretch flex h-[23.988px] items-start left-[33.11px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[40.925px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A+</p>
    </div>
  );
}

function TableCell24() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[236.49px] top-0 w-[107.162px]" data-name="Table Cell">
      <Text21 />
    </div>
  );
}

function Text22() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[33.46px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.25px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">F</p>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[343.65px] top-0 w-[97.188px]" data-name="Table Cell">
      <Text22 />
    </div>
  );
}

function Text23() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[29.99px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.25px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">F</p>
    </div>
  );
}

function TableCell26() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[440.84px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text23 />
    </div>
  );
}

function Text24() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[29.99px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.25px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">F</p>
    </div>
  );
}

function TableCell27() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[531.06px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text24 />
    </div>
  );
}

function Text25() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[29.99px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.25px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">F</p>
    </div>
  );
}

function TableCell28() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[621.29px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text25 />
    </div>
  );
}

function Text26() {
  return (
    <div className="absolute bg-[#fe9a00] content-stretch flex h-[23.988px] items-start left-[28.71px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.5px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">C</p>
    </div>
  );
}

function TableCell29() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[711.51px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text26 />
    </div>
  );
}

function Text27() {
  return (
    <div className="absolute bg-[#2b7fff] content-stretch flex h-[23.988px] items-start left-[28.61px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.7px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">B</p>
    </div>
  );
}

function TableCell30() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[800.45px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text27 />
    </div>
  );
}

function TableCell31() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[889.39px] top-0 w-[74.263px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[37.1px] not-italic text-[#101828] text-[14px] text-center top-[14.99px]">0</p>
    </div>
  );
}

function Text28() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[37.11px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.913px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">5</p>
    </div>
  );
}

function TableCell32() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[963.65px] top-0 w-[105.15px]" data-name="Table Cell">
      <Text28 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute bg-[#f9fafb] h-[50.388px] left-0 top-[100.38px] w-[1068.8px]" data-name="Table Row">
      <TableCell22 />
      <TableCell23 />
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
      <TableCell27 />
      <TableCell28 />
      <TableCell29 />
      <TableCell30 />
      <TableCell31 />
      <TableCell32 />
    </div>
  );
}

function TableCell33() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-0 top-0 w-[147.838px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[16px] not-italic text-[#101828] text-[14px] top-[14.99px]">CMA19CS004</p>
    </div>
  );
}

function Text29() {
  return (
    <div className="absolute bg-[#fe9a00] content-stretch flex h-[23.988px] items-start left-[28.57px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.5px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">C</p>
    </div>
  );
}

function TableCell34() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[147.84px] top-0 w-[88.65px]" data-name="Table Cell">
      <Text29 />
    </div>
  );
}

function Text30() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[38.21px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell35() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[236.49px] top-0 w-[107.162px]" data-name="Table Cell">
      <Text30 />
    </div>
  );
}

function Text31() {
  return (
    <div className="absolute bg-[#2b7fff] content-stretch flex h-[23.988px] items-start left-[32.74px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.7px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">B</p>
    </div>
  );
}

function TableCell36() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[343.65px] top-0 w-[97.188px]" data-name="Table Cell">
      <Text31 />
    </div>
  );
}

function Text32() {
  return (
    <div className="absolute bg-[#ff6900] content-stretch flex h-[23.988px] items-start left-[28.69px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.85px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">D</p>
    </div>
  );
}

function TableCell37() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[440.84px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text32 />
    </div>
  );
}

function Text33() {
  return (
    <div className="absolute bg-[#fe9a00] content-stretch flex h-[23.988px] items-start left-[29.36px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.5px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">C</p>
    </div>
  );
}

function TableCell38() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[531.06px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text33 />
    </div>
  );
}

function Text34() {
  return (
    <div className="absolute bg-[#ff6900] content-stretch flex h-[23.988px] items-start left-[28.69px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.85px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">D</p>
    </div>
  );
}

function TableCell39() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[621.29px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text34 />
    </div>
  );
}

function Text35() {
  return (
    <div className="absolute bg-[#00a63e] content-stretch flex h-[23.988px] items-start left-[28.25px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.438px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A</p>
    </div>
  );
}

function TableCell40() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[711.51px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text35 />
    </div>
  );
}

function Text36() {
  return (
    <div className="absolute bg-[#fe9a00] content-stretch flex h-[23.988px] items-start left-[28.71px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.5px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">C</p>
    </div>
  );
}

function TableCell41() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[800.45px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text36 />
    </div>
  );
}

function TableCell42() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[889.39px] top-0 w-[74.263px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[37.1px] not-italic text-[#101828] text-[14px] text-center top-[14.99px]">0</p>
    </div>
  );
}

function Text37() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[37.11px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.913px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">0</p>
    </div>
  );
}

function TableCell43() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[963.65px] top-0 w-[105.15px]" data-name="Table Cell">
      <Text37 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute bg-white h-[50.388px] left-0 top-[150.76px] w-[1068.8px]" data-name="Table Row">
      <TableCell33 />
      <TableCell34 />
      <TableCell35 />
      <TableCell36 />
      <TableCell37 />
      <TableCell38 />
      <TableCell39 />
      <TableCell40 />
      <TableCell41 />
      <TableCell42 />
      <TableCell43 />
    </div>
  );
}

function TableCell44() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-0 top-0 w-[147.838px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[16px] not-italic text-[#101828] text-[14px] top-[14.99px]">CMA19CS005</p>
    </div>
  );
}

function Text38() {
  return (
    <div className="absolute bg-[#fe9a00] content-stretch flex h-[23.988px] items-start left-[28.57px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.5px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">C</p>
    </div>
  );
}

function TableCell45() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[147.84px] top-0 w-[88.65px]" data-name="Table Cell">
      <Text38 />
    </div>
  );
}

function Text39() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[38.21px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell46() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[236.49px] top-0 w-[107.162px]" data-name="Table Cell">
      <Text39 />
    </div>
  );
}

function Text40() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[33.46px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.25px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">F</p>
    </div>
  );
}

function TableCell47() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[343.65px] top-0 w-[97.188px]" data-name="Table Cell">
      <Text40 />
    </div>
  );
}

function Text41() {
  return (
    <div className="absolute bg-[#fb2c36] content-stretch flex h-[23.988px] items-start left-[29.43px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.375px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">P</p>
    </div>
  );
}

function TableCell48() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[440.84px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text41 />
    </div>
  );
}

function Text42() {
  return (
    <div className="absolute bg-[#fe9a00] content-stretch flex h-[23.988px] items-start left-[29.36px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.5px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">C</p>
    </div>
  );
}

function TableCell49() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[531.06px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text42 />
    </div>
  );
}

function Text43() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[29.99px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.25px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">F</p>
    </div>
  );
}

function TableCell50() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[621.29px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text43 />
    </div>
  );
}

function Text44() {
  return (
    <div className="absolute bg-[#00a63e] content-stretch flex h-[23.988px] items-start left-[28.25px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.438px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A</p>
    </div>
  );
}

function TableCell51() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[711.51px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text44 />
    </div>
  );
}

function Text45() {
  return (
    <div className="absolute bg-[#ff6900] content-stretch flex h-[23.988px] items-start left-[28.04px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.85px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">D</p>
    </div>
  );
}

function TableCell52() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[800.45px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text45 />
    </div>
  );
}

function TableCell53() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[889.39px] top-0 w-[74.263px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[37.1px] not-italic text-[#101828] text-[14px] text-center top-[14.99px]">0</p>
    </div>
  );
}

function Text46() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[37.11px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.913px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">2</p>
    </div>
  );
}

function TableCell54() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[963.65px] top-0 w-[105.15px]" data-name="Table Cell">
      <Text46 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute bg-[#f9fafb] h-[50.388px] left-0 top-[201.15px] w-[1068.8px]" data-name="Table Row">
      <TableCell44 />
      <TableCell45 />
      <TableCell46 />
      <TableCell47 />
      <TableCell48 />
      <TableCell49 />
      <TableCell50 />
      <TableCell51 />
      <TableCell52 />
      <TableCell53 />
      <TableCell54 />
    </div>
  );
}

function TableCell55() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-0 top-0 w-[147.838px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[16px] not-italic text-[#101828] text-[14px] top-[14.99px]">CMA19CS006</p>
    </div>
  );
}

function Text47() {
  return (
    <div className="absolute bg-[#fe9a00] content-stretch flex h-[23.988px] items-start left-[28.57px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.5px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">C</p>
    </div>
  );
}

function TableCell56() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[147.84px] top-0 w-[88.65px]" data-name="Table Cell">
      <Text47 />
    </div>
  );
}

function Text48() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[38.21px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell57() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[236.49px] top-0 w-[107.162px]" data-name="Table Cell">
      <Text48 />
    </div>
  );
}

function Text49() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[33.46px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.25px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">F</p>
    </div>
  );
}

function TableCell58() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[343.65px] top-0 w-[97.188px]" data-name="Table Cell">
      <Text49 />
    </div>
  );
}

function Text50() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[29.99px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.25px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">F</p>
    </div>
  );
}

function TableCell59() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[440.84px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text50 />
    </div>
  );
}

function Text51() {
  return (
    <div className="absolute bg-[#ff6900] content-stretch flex h-[23.988px] items-start left-[28.69px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.85px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">D</p>
    </div>
  );
}

function TableCell60() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[531.06px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text51 />
    </div>
  );
}

function Text52() {
  return (
    <div className="absolute bg-[#fb2c36] content-stretch flex h-[23.988px] items-start left-[29.42px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.375px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">P</p>
    </div>
  );
}

function TableCell61() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[621.29px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text52 />
    </div>
  );
}

function Text53() {
  return (
    <div className="absolute bg-[#00c950] content-stretch flex h-[23.988px] items-start left-[24px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[40.925px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A+</p>
    </div>
  );
}

function TableCell62() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[711.51px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text53 />
    </div>
  );
}

function Text54() {
  return (
    <div className="absolute bg-[#00c950] content-stretch flex h-[23.988px] items-start left-[24px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[40.925px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A+</p>
    </div>
  );
}

function TableCell63() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[800.45px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text54 />
    </div>
  );
}

function TableCell64() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[889.39px] top-0 w-[74.263px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[37.1px] not-italic text-[#101828] text-[14px] text-center top-[14.99px]">0</p>
    </div>
  );
}

function Text55() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[37.11px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.913px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">2</p>
    </div>
  );
}

function TableCell65() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[963.65px] top-0 w-[105.15px]" data-name="Table Cell">
      <Text55 />
    </div>
  );
}

function TableRow6() {
  return (
    <div className="absolute bg-white h-[50.388px] left-0 top-[251.54px] w-[1068.8px]" data-name="Table Row">
      <TableCell55 />
      <TableCell56 />
      <TableCell57 />
      <TableCell58 />
      <TableCell59 />
      <TableCell60 />
      <TableCell61 />
      <TableCell62 />
      <TableCell63 />
      <TableCell64 />
      <TableCell65 />
    </div>
  );
}

function TableCell66() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-0 top-0 w-[147.838px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[16px] not-italic text-[#101828] text-[14px] top-[14.99px]">CMA19CS007</p>
    </div>
  );
}

function Text56() {
  return (
    <div className="absolute bg-[#fe9a00] content-stretch flex h-[23.988px] items-start left-[28.57px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.5px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">C</p>
    </div>
  );
}

function TableCell67() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[147.84px] top-0 w-[88.65px]" data-name="Table Cell">
      <Text56 />
    </div>
  );
}

function Text57() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[38.21px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell68() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[236.49px] top-0 w-[107.162px]" data-name="Table Cell">
      <Text57 />
    </div>
  );
}

function Text58() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[33.23px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell69() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[343.65px] top-0 w-[97.188px]" data-name="Table Cell">
      <Text58 />
    </div>
  );
}

function Text59() {
  return (
    <div className="absolute bg-[#fe9a00] content-stretch flex h-[23.988px] items-start left-[29.36px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.5px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">C</p>
    </div>
  );
}

function TableCell70() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[440.84px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text59 />
    </div>
  );
}

function Text60() {
  return (
    <div className="absolute bg-[#2b7fff] content-stretch flex h-[23.988px] items-start left-[29.26px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.7px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">B</p>
    </div>
  );
}

function TableCell71() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[531.06px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text60 />
    </div>
  );
}

function Text61() {
  return (
    <div className="absolute bg-[#fe9a00] content-stretch flex h-[23.988px] items-start left-[29.36px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.5px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">C</p>
    </div>
  );
}

function TableCell72() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[621.29px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text61 />
    </div>
  );
}

function Text62() {
  return (
    <div className="absolute bg-[#00c950] content-stretch flex h-[23.988px] items-start left-[24px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[40.925px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A+</p>
    </div>
  );
}

function TableCell73() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[711.51px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text62 />
    </div>
  );
}

function Text63() {
  return (
    <div className="absolute bg-[#ff6900] content-stretch flex h-[23.988px] items-start left-[28.04px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.85px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">D</p>
    </div>
  );
}

function TableCell74() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[800.45px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text63 />
    </div>
  );
}

function TableCell75() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[889.39px] top-0 w-[74.263px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[37.1px] not-italic text-[#101828] text-[14px] text-center top-[14.99px]">0</p>
    </div>
  );
}

function Text64() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[37.11px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.913px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">0</p>
    </div>
  );
}

function TableCell76() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[963.65px] top-0 w-[105.15px]" data-name="Table Cell">
      <Text64 />
    </div>
  );
}

function TableRow7() {
  return (
    <div className="absolute bg-[#f9fafb] h-[50.388px] left-0 top-[301.92px] w-[1068.8px]" data-name="Table Row">
      <TableCell66 />
      <TableCell67 />
      <TableCell68 />
      <TableCell69 />
      <TableCell70 />
      <TableCell71 />
      <TableCell72 />
      <TableCell73 />
      <TableCell74 />
      <TableCell75 />
      <TableCell76 />
    </div>
  );
}

function TableCell77() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-0 top-0 w-[147.838px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[16px] not-italic text-[#101828] text-[14px] top-[14.99px]">CMA19CS008</p>
    </div>
  );
}

function Text65() {
  return (
    <div className="absolute bg-[#2b7fff] content-stretch flex h-[23.988px] items-start left-[28.48px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.7px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">B</p>
    </div>
  );
}

function TableCell78() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[147.84px] top-0 w-[88.65px]" data-name="Table Cell">
      <Text65 />
    </div>
  );
}

function Text66() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[38.21px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell79() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[236.49px] top-0 w-[107.162px]" data-name="Table Cell">
      <Text66 />
    </div>
  );
}

function Text67() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[33.46px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.25px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">F</p>
    </div>
  );
}

function TableCell80() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[343.65px] top-0 w-[97.188px]" data-name="Table Cell">
      <Text67 />
    </div>
  );
}

function Text68() {
  return (
    <div className="absolute bg-[#fb2c36] content-stretch flex h-[23.988px] items-start left-[29.43px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.375px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">P</p>
    </div>
  );
}

function TableCell81() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[440.84px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text68 />
    </div>
  );
}

function Text69() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[29.99px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.25px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">F</p>
    </div>
  );
}

function TableCell82() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[531.06px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text69 />
    </div>
  );
}

function Text70() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[29.99px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.25px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">F</p>
    </div>
  );
}

function TableCell83() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[621.29px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text70 />
    </div>
  );
}

function Text71() {
  return (
    <div className="absolute bg-[#00a63e] content-stretch flex h-[23.988px] items-start left-[28.25px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.438px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A</p>
    </div>
  );
}

function TableCell84() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[711.51px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text71 />
    </div>
  );
}

function Text72() {
  return (
    <div className="absolute bg-[#ff6900] content-stretch flex h-[23.988px] items-start left-[28.04px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.85px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">D</p>
    </div>
  );
}

function TableCell85() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[800.45px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text72 />
    </div>
  );
}

function TableCell86() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[889.39px] top-0 w-[74.263px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[37.1px] not-italic text-[#101828] text-[14px] text-center top-[14.99px]">0</p>
    </div>
  );
}

function Text73() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[37.11px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.913px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">3</p>
    </div>
  );
}

function TableCell87() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[963.65px] top-0 w-[105.15px]" data-name="Table Cell">
      <Text73 />
    </div>
  );
}

function TableRow8() {
  return (
    <div className="absolute bg-white h-[50.388px] left-0 top-[352.31px] w-[1068.8px]" data-name="Table Row">
      <TableCell77 />
      <TableCell78 />
      <TableCell79 />
      <TableCell80 />
      <TableCell81 />
      <TableCell82 />
      <TableCell83 />
      <TableCell84 />
      <TableCell85 />
      <TableCell86 />
      <TableCell87 />
    </div>
  );
}

function TableCell88() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-0 top-0 w-[147.838px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[16px] not-italic text-[#101828] text-[14px] top-[14.99px]">CMA19CS009</p>
    </div>
  );
}

function Text74() {
  return (
    <div className="absolute bg-[#00a63e] content-stretch flex h-[23.988px] items-start left-[28.1px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.438px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A</p>
    </div>
  );
}

function TableCell89() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[147.84px] top-0 w-[88.65px]" data-name="Table Cell">
      <Text74 />
    </div>
  );
}

function Text75() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[38.21px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell90() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[236.49px] top-0 w-[107.162px]" data-name="Table Cell">
      <Text75 />
    </div>
  );
}

function Text76() {
  return (
    <div className="absolute bg-[#00a63e] content-stretch flex h-[23.988px] items-start left-[32.38px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.438px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A</p>
    </div>
  );
}

function TableCell91() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[343.65px] top-0 w-[97.188px]" data-name="Table Cell">
      <Text76 />
    </div>
  );
}

function Text77() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[29.74px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell92() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[440.84px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text77 />
    </div>
  );
}

function Text78() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[29.74px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell93() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[531.06px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text78 />
    </div>
  );
}

function Text79() {
  return (
    <div className="absolute bg-[#00c950] content-stretch flex h-[23.988px] items-start left-[24.65px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[40.925px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A+</p>
    </div>
  );
}

function TableCell94() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[621.29px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text79 />
    </div>
  );
}

function Text80() {
  return (
    <div className="absolute bg-[#00c950] content-stretch flex h-[23.988px] items-start left-[24px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[40.925px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A+</p>
    </div>
  );
}

function TableCell95() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[711.51px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text80 />
    </div>
  );
}

function Text81() {
  return (
    <div className="absolute bg-[#00a63e] content-stretch flex h-[23.988px] items-start left-[28.25px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.438px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A</p>
    </div>
  );
}

function TableCell96() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[800.45px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text81 />
    </div>
  );
}

function TableCell97() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[889.39px] top-0 w-[74.263px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[37.1px] not-italic text-[#101828] text-[14px] text-center top-[14.99px]">0</p>
    </div>
  );
}

function Text82() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[37.11px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.913px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">0</p>
    </div>
  );
}

function TableCell98() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[963.65px] top-0 w-[105.15px]" data-name="Table Cell">
      <Text82 />
    </div>
  );
}

function TableRow9() {
  return (
    <div className="absolute bg-[#f9fafb] h-[50.388px] left-0 top-[402.7px] w-[1068.8px]" data-name="Table Row">
      <TableCell88 />
      <TableCell89 />
      <TableCell90 />
      <TableCell91 />
      <TableCell92 />
      <TableCell93 />
      <TableCell94 />
      <TableCell95 />
      <TableCell96 />
      <TableCell97 />
      <TableCell98 />
    </div>
  );
}

function TableCell99() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-0 top-0 w-[147.838px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[16px] not-italic text-[#101828] text-[14px] top-[14.99px]">CMA19CS010</p>
    </div>
  );
}

function Text83() {
  return (
    <div className="absolute bg-[#2b7fff] content-stretch flex h-[23.988px] items-start left-[28.48px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.7px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">B</p>
    </div>
  );
}

function TableCell100() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[147.84px] top-0 w-[88.65px]" data-name="Table Cell">
      <Text83 />
    </div>
  );
}

function Text84() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[38.21px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell101() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[236.49px] top-0 w-[107.162px]" data-name="Table Cell">
      <Text84 />
    </div>
  );
}

function Text85() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[33.23px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell102() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[343.65px] top-0 w-[97.188px]" data-name="Table Cell">
      <Text85 />
    </div>
  );
}

function Text86() {
  return (
    <div className="absolute bg-[#00a63e] content-stretch flex h-[23.988px] items-start left-[28.89px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.438px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A</p>
    </div>
  );
}

function TableCell103() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[440.84px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text86 />
    </div>
  );
}

function Text87() {
  return (
    <div className="absolute bg-[#00c950] content-stretch flex h-[23.988px] items-start left-[24.65px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[40.925px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A+</p>
    </div>
  );
}

function TableCell104() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[531.06px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text87 />
    </div>
  );
}

function Text88() {
  return (
    <div className="absolute bg-[#fe9a00] content-stretch flex h-[23.988px] items-start left-[29.36px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.5px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">C</p>
    </div>
  );
}

function TableCell105() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[621.29px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text88 />
    </div>
  );
}

function Text89() {
  return (
    <div className="absolute bg-[#00c950] content-stretch flex h-[23.988px] items-start left-[24px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[40.925px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A+</p>
    </div>
  );
}

function TableCell106() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[711.51px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text89 />
    </div>
  );
}

function Text90() {
  return (
    <div className="absolute bg-[#51a2ff] content-stretch flex h-[23.988px] items-start left-[24.38px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[40.188px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">B+</p>
    </div>
  );
}

function TableCell107() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[800.45px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text90 />
    </div>
  );
}

function TableCell108() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[889.39px] top-0 w-[74.263px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[37.1px] not-italic text-[#101828] text-[14px] text-center top-[14.99px]">0</p>
    </div>
  );
}

function Text91() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[37.11px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.913px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">0</p>
    </div>
  );
}

function TableCell109() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[963.65px] top-0 w-[105.15px]" data-name="Table Cell">
      <Text91 />
    </div>
  );
}

function TableRow10() {
  return (
    <div className="absolute bg-white h-[50.388px] left-0 top-[453.09px] w-[1068.8px]" data-name="Table Row">
      <TableCell99 />
      <TableCell100 />
      <TableCell101 />
      <TableCell102 />
      <TableCell103 />
      <TableCell104 />
      <TableCell105 />
      <TableCell106 />
      <TableCell107 />
      <TableCell108 />
      <TableCell109 />
    </div>
  );
}

function TableCell110() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-0 top-0 w-[147.838px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[16px] not-italic text-[#101828] text-[14px] top-[14.99px]">CMA19CS011</p>
    </div>
  );
}

function Text92() {
  return (
    <div className="absolute bg-[#fe9a00] content-stretch flex h-[23.988px] items-start left-[28.57px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.5px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">C</p>
    </div>
  );
}

function TableCell111() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[147.84px] top-0 w-[88.65px]" data-name="Table Cell">
      <Text92 />
    </div>
  );
}

function Text93() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[38.21px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell112() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[236.49px] top-0 w-[107.162px]" data-name="Table Cell">
      <Text93 />
    </div>
  );
}

function Text94() {
  return (
    <div className="absolute bg-[#fb2c36] content-stretch flex h-[23.988px] items-start left-[32.9px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.375px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">P</p>
    </div>
  );
}

function TableCell113() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[343.65px] top-0 w-[97.188px]" data-name="Table Cell">
      <Text94 />
    </div>
  );
}

function Text95() {
  return (
    <div className="absolute bg-[#fb2c36] content-stretch flex h-[23.988px] items-start left-[29.43px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.375px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">P</p>
    </div>
  );
}

function TableCell114() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[440.84px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text95 />
    </div>
  );
}

function Text96() {
  return (
    <div className="absolute bg-[#ff6900] content-stretch flex h-[23.988px] items-start left-[28.69px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.85px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">D</p>
    </div>
  );
}

function TableCell115() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[531.06px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text96 />
    </div>
  );
}

function Text97() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[29.99px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.25px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">F</p>
    </div>
  );
}

function TableCell116() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[621.29px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text97 />
    </div>
  );
}

function Text98() {
  return (
    <div className="absolute bg-[#51a2ff] content-stretch flex h-[23.988px] items-start left-[24.38px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[40.188px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">B+</p>
    </div>
  );
}

function TableCell117() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[711.51px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text98 />
    </div>
  );
}

function Text99() {
  return (
    <div className="absolute bg-[#ffb900] content-stretch flex h-[23.988px] items-start left-[24.48px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[39.975px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">C+</p>
    </div>
  );
}

function TableCell118() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[800.45px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text99 />
    </div>
  );
}

function TableCell119() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[889.39px] top-0 w-[74.263px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[37.1px] not-italic text-[#101828] text-[14px] text-center top-[14.99px]">0</p>
    </div>
  );
}

function Text100() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[37.11px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.913px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[16px] min-h-px min-w-px not-italic relative text-[12px] text-center text-white whitespace-pre-wrap">1</p>
    </div>
  );
}

function TableCell120() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[963.65px] top-0 w-[105.15px]" data-name="Table Cell">
      <Text100 />
    </div>
  );
}

function TableRow11() {
  return (
    <div className="absolute bg-[#f9fafb] h-[50.388px] left-0 top-[503.48px] w-[1068.8px]" data-name="Table Row">
      <TableCell110 />
      <TableCell111 />
      <TableCell112 />
      <TableCell113 />
      <TableCell114 />
      <TableCell115 />
      <TableCell116 />
      <TableCell117 />
      <TableCell118 />
      <TableCell119 />
      <TableCell120 />
    </div>
  );
}

function TableCell121() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-0 top-0 w-[147.838px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[16px] not-italic text-[#101828] text-[14px] top-[14.99px]">CMA19CS012</p>
    </div>
  );
}

function Text101() {
  return (
    <div className="absolute bg-[#fe9a00] content-stretch flex h-[23.988px] items-start left-[28.57px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.5px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">C</p>
    </div>
  );
}

function TableCell122() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[147.84px] top-0 w-[88.65px]" data-name="Table Cell">
      <Text101 />
    </div>
  );
}

function Text102() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[38.21px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell123() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[236.49px] top-0 w-[107.162px]" data-name="Table Cell">
      <Text102 />
    </div>
  );
}

function Text103() {
  return (
    <div className="absolute bg-[#fe9a00] content-stretch flex h-[23.988px] items-start left-[32.84px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.5px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">C</p>
    </div>
  );
}

function TableCell124() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[343.65px] top-0 w-[97.188px]" data-name="Table Cell">
      <Text103 />
    </div>
  );
}

function Text104() {
  return (
    <div className="absolute bg-[#fb2c36] content-stretch flex h-[23.988px] items-start left-[29.43px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.375px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">P</p>
    </div>
  );
}

function TableCell125() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[440.84px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text104 />
    </div>
  );
}

function Text105() {
  return (
    <div className="absolute bg-[#ff6900] content-stretch flex h-[23.988px] items-start left-[28.69px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.85px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">D</p>
    </div>
  );
}

function TableCell126() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[531.06px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text105 />
    </div>
  );
}

function Text106() {
  return (
    <div className="absolute bg-[#ff6900] content-stretch flex h-[23.988px] items-start left-[28.69px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.85px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">D</p>
    </div>
  );
}

function TableCell127() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[621.29px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text106 />
    </div>
  );
}

function Text107() {
  return (
    <div className="absolute bg-[#00c950] content-stretch flex h-[23.988px] items-start left-[24px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[40.925px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A+</p>
    </div>
  );
}

function TableCell128() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[711.51px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text107 />
    </div>
  );
}

function Text108() {
  return (
    <div className="absolute bg-[#ff6900] content-stretch flex h-[23.988px] items-start left-[28.04px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.85px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">D</p>
    </div>
  );
}

function TableCell129() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[800.45px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text108 />
    </div>
  );
}

function TableCell130() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[889.39px] top-0 w-[74.263px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[37.1px] not-italic text-[#101828] text-[14px] text-center top-[14.99px]">0</p>
    </div>
  );
}

function Text109() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[37.11px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.913px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">0</p>
    </div>
  );
}

function TableCell131() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[963.65px] top-0 w-[105.15px]" data-name="Table Cell">
      <Text109 />
    </div>
  );
}

function TableRow12() {
  return (
    <div className="absolute bg-white h-[50.388px] left-0 top-[553.86px] w-[1068.8px]" data-name="Table Row">
      <TableCell121 />
      <TableCell122 />
      <TableCell123 />
      <TableCell124 />
      <TableCell125 />
      <TableCell126 />
      <TableCell127 />
      <TableCell128 />
      <TableCell129 />
      <TableCell130 />
      <TableCell131 />
    </div>
  );
}

function TableCell132() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-0 top-0 w-[147.838px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[16px] not-italic text-[#101828] text-[14px] top-[14.99px]">CMA19CS013</p>
    </div>
  );
}

function Text110() {
  return (
    <div className="absolute bg-[#fb2c36] content-stretch flex h-[23.988px] items-start left-[28.64px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.375px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">P</p>
    </div>
  );
}

function TableCell133() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[147.84px] top-0 w-[88.65px]" data-name="Table Cell">
      <Text110 />
    </div>
  );
}

function Text111() {
  return (
    <div className="absolute bg-[#00a63e] content-stretch flex h-[23.988px] items-start left-[37.36px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.438px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A</p>
    </div>
  );
}

function TableCell134() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[236.49px] top-0 w-[107.162px]" data-name="Table Cell">
      <Text111 />
    </div>
  );
}

function Text112() {
  return (
    <div className="absolute bg-[#51a2ff] content-stretch flex h-[23.988px] items-start left-[28.5px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[40.188px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">B+</p>
    </div>
  );
}

function TableCell135() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[343.65px] top-0 w-[97.188px]" data-name="Table Cell">
      <Text112 />
    </div>
  );
}

function Text113() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[29.99px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.25px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">F</p>
    </div>
  );
}

function TableCell136() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[440.84px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text113 />
    </div>
  );
}

function Text114() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[29.99px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.25px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">F</p>
    </div>
  );
}

function TableCell137() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[531.06px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text114 />
    </div>
  );
}

function Text115() {
  return (
    <div className="absolute bg-[#ff6900] content-stretch flex h-[23.988px] items-start left-[28.69px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.85px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">D</p>
    </div>
  );
}

function TableCell138() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[621.29px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text115 />
    </div>
  );
}

function Text116() {
  return (
    <div className="absolute bg-[#00a63e] content-stretch flex h-[23.988px] items-start left-[28.25px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.438px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A</p>
    </div>
  );
}

function TableCell139() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[711.51px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text116 />
    </div>
  );
}

function Text117() {
  return (
    <div className="absolute bg-[#ff6900] content-stretch flex h-[23.988px] items-start left-[28.04px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.85px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">D</p>
    </div>
  );
}

function TableCell140() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[800.45px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text117 />
    </div>
  );
}

function TableCell141() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[889.39px] top-0 w-[74.263px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[37.1px] not-italic text-[#101828] text-[14px] text-center top-[14.99px]">0</p>
    </div>
  );
}

function Text118() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[37.11px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.913px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">2</p>
    </div>
  );
}

function TableCell142() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[963.65px] top-0 w-[105.15px]" data-name="Table Cell">
      <Text118 />
    </div>
  );
}

function TableRow13() {
  return (
    <div className="absolute bg-[#f9fafb] h-[50.388px] left-0 top-[604.25px] w-[1068.8px]" data-name="Table Row">
      <TableCell132 />
      <TableCell133 />
      <TableCell134 />
      <TableCell135 />
      <TableCell136 />
      <TableCell137 />
      <TableCell138 />
      <TableCell139 />
      <TableCell140 />
      <TableCell141 />
      <TableCell142 />
    </div>
  );
}

function TableCell143() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-0 top-0 w-[147.838px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[16px] not-italic text-[#101828] text-[14px] top-[14.99px]">CMA19CS014</p>
    </div>
  );
}

function Text119() {
  return (
    <div className="absolute bg-[#fe9a00] content-stretch flex h-[23.988px] items-start left-[28.57px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.5px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">C</p>
    </div>
  );
}

function TableCell144() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[147.84px] top-0 w-[88.65px]" data-name="Table Cell">
      <Text119 />
    </div>
  );
}

function Text120() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[38.21px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell145() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[236.49px] top-0 w-[107.162px]" data-name="Table Cell">
      <Text120 />
    </div>
  );
}

function Text121() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[33.23px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell146() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[343.65px] top-0 w-[97.188px]" data-name="Table Cell">
      <Text121 />
    </div>
  );
}

function Text122() {
  return (
    <div className="absolute bg-[#ffb900] content-stretch flex h-[23.988px] items-start left-[25.13px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[39.975px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">C+</p>
    </div>
  );
}

function TableCell147() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[440.84px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text122 />
    </div>
  );
}

function Text123() {
  return (
    <div className="absolute bg-[#00c950] content-stretch flex h-[23.988px] items-start left-[24.65px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[40.925px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A+</p>
    </div>
  );
}

function TableCell148() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[531.06px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text123 />
    </div>
  );
}

function Text124() {
  return (
    <div className="absolute bg-[#fb2c36] content-stretch flex h-[23.988px] items-start left-[29.42px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.375px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">P</p>
    </div>
  );
}

function TableCell149() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[621.29px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text124 />
    </div>
  );
}

function Text125() {
  return (
    <div className="absolute bg-[#51a2ff] content-stretch flex h-[23.988px] items-start left-[24.38px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[40.188px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">B+</p>
    </div>
  );
}

function TableCell150() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[711.51px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text125 />
    </div>
  );
}

function Text126() {
  return (
    <div className="absolute bg-[#51a2ff] content-stretch flex h-[23.988px] items-start left-[24.38px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[40.188px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">B+</p>
    </div>
  );
}

function TableCell151() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[800.45px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text126 />
    </div>
  );
}

function TableCell152() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[889.39px] top-0 w-[74.263px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[37.1px] not-italic text-[#101828] text-[14px] text-center top-[14.99px]">0</p>
    </div>
  );
}

function Text127() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[37.11px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.913px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">0</p>
    </div>
  );
}

function TableCell153() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[963.65px] top-0 w-[105.15px]" data-name="Table Cell">
      <Text127 />
    </div>
  );
}

function TableRow14() {
  return (
    <div className="absolute bg-white h-[50.388px] left-0 top-[654.64px] w-[1068.8px]" data-name="Table Row">
      <TableCell143 />
      <TableCell144 />
      <TableCell145 />
      <TableCell146 />
      <TableCell147 />
      <TableCell148 />
      <TableCell149 />
      <TableCell150 />
      <TableCell151 />
      <TableCell152 />
      <TableCell153 />
    </div>
  );
}

function TableCell154() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-0 top-0 w-[147.838px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[16px] not-italic text-[#101828] text-[14px] top-[14.99px]">CMA19CS015</p>
    </div>
  );
}

function Text128() {
  return (
    <div className="absolute bg-[#ff6900] content-stretch flex h-[23.988px] items-start left-[27.9px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.85px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">D</p>
    </div>
  );
}

function TableCell155() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[147.84px] top-0 w-[88.65px]" data-name="Table Cell">
      <Text128 />
    </div>
  );
}

function Text129() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[38.21px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell156() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[236.49px] top-0 w-[107.162px]" data-name="Table Cell">
      <Text129 />
    </div>
  );
}

function Text130() {
  return (
    <div className="absolute bg-[#fe9a00] content-stretch flex h-[23.988px] items-start left-[32.84px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.5px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">C</p>
    </div>
  );
}

function TableCell157() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[343.65px] top-0 w-[97.188px]" data-name="Table Cell">
      <Text130 />
    </div>
  );
}

function Text131() {
  return (
    <div className="absolute bg-[#2b7fff] content-stretch flex h-[23.988px] items-start left-[29.26px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.7px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">B</p>
    </div>
  );
}

function TableCell158() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[440.84px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text131 />
    </div>
  );
}

function Text132() {
  return (
    <div className="absolute bg-[#51a2ff] content-stretch flex h-[23.988px] items-start left-[25.01px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[40.188px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">B+</p>
    </div>
  );
}

function TableCell159() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[531.06px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text132 />
    </div>
  );
}

function Text133() {
  return (
    <div className="absolute bg-[#fb2c36] content-stretch flex h-[23.988px] items-start left-[29.42px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.375px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">P</p>
    </div>
  );
}

function TableCell160() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[621.29px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text133 />
    </div>
  );
}

function Text134() {
  return (
    <div className="absolute bg-[#00a63e] content-stretch flex h-[23.988px] items-start left-[28.25px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.438px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A</p>
    </div>
  );
}

function TableCell161() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[711.51px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text134 />
    </div>
  );
}

function Text135() {
  return (
    <div className="absolute bg-[#00c950] content-stretch flex h-[23.988px] items-start left-[24px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[40.925px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A+</p>
    </div>
  );
}

function TableCell162() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[800.45px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text135 />
    </div>
  );
}

function TableCell163() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[889.39px] top-0 w-[74.263px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[37.1px] not-italic text-[#101828] text-[14px] text-center top-[14.99px]">0</p>
    </div>
  );
}

function Text136() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[37.11px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.913px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">0</p>
    </div>
  );
}

function TableCell164() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[963.65px] top-0 w-[105.15px]" data-name="Table Cell">
      <Text136 />
    </div>
  );
}

function TableRow15() {
  return (
    <div className="absolute bg-[#f9fafb] h-[50.388px] left-0 top-[705.03px] w-[1068.8px]" data-name="Table Row">
      <TableCell154 />
      <TableCell155 />
      <TableCell156 />
      <TableCell157 />
      <TableCell158 />
      <TableCell159 />
      <TableCell160 />
      <TableCell161 />
      <TableCell162 />
      <TableCell163 />
      <TableCell164 />
    </div>
  );
}

function TableCell165() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-0 top-0 w-[147.838px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[16px] not-italic text-[#101828] text-[14px] top-[14.99px]">CMA19CS016</p>
    </div>
  );
}

function Text137() {
  return (
    <div className="absolute bg-[#fe9a00] content-stretch flex h-[23.988px] items-start left-[28.57px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.5px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">C</p>
    </div>
  );
}

function TableCell166() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[147.84px] top-0 w-[88.65px]" data-name="Table Cell">
      <Text137 />
    </div>
  );
}

function Text138() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[38.21px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell167() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[236.49px] top-0 w-[107.162px]" data-name="Table Cell">
      <Text138 />
    </div>
  );
}

function Text139() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[33.46px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.25px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">F</p>
    </div>
  );
}

function TableCell168() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[343.65px] top-0 w-[97.188px]" data-name="Table Cell">
      <Text139 />
    </div>
  );
}

function Text140() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[29.99px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.25px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">F</p>
    </div>
  );
}

function TableCell169() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[440.84px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text140 />
    </div>
  );
}

function Text141() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[29.99px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.25px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">F</p>
    </div>
  );
}

function TableCell170() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[531.06px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text141 />
    </div>
  );
}

function Text142() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[29.99px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.25px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">F</p>
    </div>
  );
}

function TableCell171() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[621.29px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text142 />
    </div>
  );
}

function Text143() {
  return (
    <div className="absolute bg-[#00a63e] content-stretch flex h-[23.988px] items-start left-[28.25px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.438px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A</p>
    </div>
  );
}

function TableCell172() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[711.51px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text143 />
    </div>
  );
}

function Text144() {
  return (
    <div className="absolute bg-[#ff6900] content-stretch flex h-[23.988px] items-start left-[28.04px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.85px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">D</p>
    </div>
  );
}

function TableCell173() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[800.45px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text144 />
    </div>
  );
}

function TableCell174() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[889.39px] top-0 w-[74.263px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[37.1px] not-italic text-[#101828] text-[14px] text-center top-[14.99px]">0</p>
    </div>
  );
}

function Text145() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[37.11px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.913px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">4</p>
    </div>
  );
}

function TableCell175() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[963.65px] top-0 w-[105.15px]" data-name="Table Cell">
      <Text145 />
    </div>
  );
}

function TableRow16() {
  return (
    <div className="absolute bg-white h-[50.388px] left-0 top-[755.41px] w-[1068.8px]" data-name="Table Row">
      <TableCell165 />
      <TableCell166 />
      <TableCell167 />
      <TableCell168 />
      <TableCell169 />
      <TableCell170 />
      <TableCell171 />
      <TableCell172 />
      <TableCell173 />
      <TableCell174 />
      <TableCell175 />
    </div>
  );
}

function TableCell176() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-0 top-0 w-[147.838px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[16px] not-italic text-[#101828] text-[14px] top-[14.99px]">CMA19CS017</p>
    </div>
  );
}

function Text146() {
  return (
    <div className="absolute bg-[#51a2ff] content-stretch flex h-[23.988px] items-start left-[24.23px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[40.188px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">B+</p>
    </div>
  );
}

function TableCell177() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[147.84px] top-0 w-[88.65px]" data-name="Table Cell">
      <Text146 />
    </div>
  );
}

function Text147() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[38.21px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell178() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[236.49px] top-0 w-[107.162px]" data-name="Table Cell">
      <Text147 />
    </div>
  );
}

function Text148() {
  return (
    <div className="absolute bg-[#51a2ff] content-stretch flex h-[23.988px] items-start left-[28.5px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[40.188px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">B+</p>
    </div>
  );
}

function TableCell179() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[343.65px] top-0 w-[97.188px]" data-name="Table Cell">
      <Text148 />
    </div>
  );
}

function Text149() {
  return (
    <div className="absolute bg-[#00c950] content-stretch flex h-[23.988px] items-start left-[24.65px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[40.925px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A+</p>
    </div>
  );
}

function TableCell180() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[440.84px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text149 />
    </div>
  );
}

function Text150() {
  return (
    <div className="absolute bg-[#fb2c36] content-stretch flex h-[23.988px] items-start left-[29.42px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.375px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">P</p>
    </div>
  );
}

function TableCell181() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[531.06px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text150 />
    </div>
  );
}

function Text151() {
  return (
    <div className="absolute bg-[#fe9a00] content-stretch flex h-[23.988px] items-start left-[29.36px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.5px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">C</p>
    </div>
  );
}

function TableCell182() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[621.29px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text151 />
    </div>
  );
}

function Text152() {
  return (
    <div className="absolute bg-[#51a2ff] content-stretch flex h-[23.988px] items-start left-[24.38px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[40.188px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">B+</p>
    </div>
  );
}

function TableCell183() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[711.51px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text152 />
    </div>
  );
}

function Text153() {
  return (
    <div className="absolute bg-[#ffb900] content-stretch flex h-[23.988px] items-start left-[24.48px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[39.975px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">C+</p>
    </div>
  );
}

function TableCell184() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[800.45px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text153 />
    </div>
  );
}

function TableCell185() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[889.39px] top-0 w-[74.263px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[37.1px] not-italic text-[#101828] text-[14px] text-center top-[14.99px]">0</p>
    </div>
  );
}

function Text154() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[37.11px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.913px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">0</p>
    </div>
  );
}

function TableCell186() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[963.65px] top-0 w-[105.15px]" data-name="Table Cell">
      <Text154 />
    </div>
  );
}

function TableRow17() {
  return (
    <div className="absolute bg-[#f9fafb] h-[50.388px] left-0 top-[805.8px] w-[1068.8px]" data-name="Table Row">
      <TableCell176 />
      <TableCell177 />
      <TableCell178 />
      <TableCell179 />
      <TableCell180 />
      <TableCell181 />
      <TableCell182 />
      <TableCell183 />
      <TableCell184 />
      <TableCell185 />
      <TableCell186 />
    </div>
  );
}

function TableCell187() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-0 top-0 w-[147.838px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[16px] not-italic text-[#101828] text-[14px] top-[14.99px]">CMA19CS018</p>
    </div>
  );
}

function Text155() {
  return (
    <div className="absolute bg-[#00c950] content-stretch flex h-[23.988px] items-start left-[23.86px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[40.925px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A+</p>
    </div>
  );
}

function TableCell188() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[147.84px] top-0 w-[88.65px]" data-name="Table Cell">
      <Text155 />
    </div>
  );
}

function Text156() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[38.21px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell189() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[236.49px] top-0 w-[107.162px]" data-name="Table Cell">
      <Text156 />
    </div>
  );
}

function Text157() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[33.46px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.25px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">F</p>
    </div>
  );
}

function TableCell190() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[343.65px] top-0 w-[97.188px]" data-name="Table Cell">
      <Text157 />
    </div>
  );
}

function Text158() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[29.99px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.25px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">F</p>
    </div>
  );
}

function TableCell191() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[440.84px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text158 />
    </div>
  );
}

function Text159() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[29.99px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.25px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">F</p>
    </div>
  );
}

function TableCell192() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[531.06px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text159 />
    </div>
  );
}

function Text160() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[29.99px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.25px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">F</p>
    </div>
  );
}

function TableCell193() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[621.29px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text160 />
    </div>
  );
}

function Text161() {
  return (
    <div className="absolute bg-[#00a63e] content-stretch flex h-[23.988px] items-start left-[28.25px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.438px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A</p>
    </div>
  );
}

function TableCell194() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[711.51px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text161 />
    </div>
  );
}

function Text162() {
  return (
    <div className="absolute bg-[#51a2ff] content-stretch flex h-[23.988px] items-start left-[24.38px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[40.188px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">B+</p>
    </div>
  );
}

function TableCell195() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[800.45px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text162 />
    </div>
  );
}

function TableCell196() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[889.39px] top-0 w-[74.263px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[37.1px] not-italic text-[#101828] text-[14px] text-center top-[14.99px]">0</p>
    </div>
  );
}

function Text163() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[37.11px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.913px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">4</p>
    </div>
  );
}

function TableCell197() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[963.65px] top-0 w-[105.15px]" data-name="Table Cell">
      <Text163 />
    </div>
  );
}

function TableRow18() {
  return (
    <div className="absolute bg-white h-[50.388px] left-0 top-[856.19px] w-[1068.8px]" data-name="Table Row">
      <TableCell187 />
      <TableCell188 />
      <TableCell189 />
      <TableCell190 />
      <TableCell191 />
      <TableCell192 />
      <TableCell193 />
      <TableCell194 />
      <TableCell195 />
      <TableCell196 />
      <TableCell197 />
    </div>
  );
}

function TableCell198() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-0 top-0 w-[147.838px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[16px] not-italic text-[#101828] text-[14px] top-[14.99px]">CMA19CS019</p>
    </div>
  );
}

function Text164() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[28.95px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell199() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[147.84px] top-0 w-[88.65px]" data-name="Table Cell">
      <Text164 />
    </div>
  );
}

function Text165() {
  return (
    <div className="absolute bg-[#00a63e] content-stretch flex h-[23.988px] items-start left-[37.36px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.438px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A</p>
    </div>
  );
}

function TableCell200() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[236.49px] top-0 w-[107.162px]" data-name="Table Cell">
      <Text165 />
    </div>
  );
}

function Text166() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[33.23px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell201() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[343.65px] top-0 w-[97.188px]" data-name="Table Cell">
      <Text166 />
    </div>
  );
}

function Text167() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[29.74px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell202() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[440.84px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text167 />
    </div>
  );
}

function Text168() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[29.74px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell203() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[531.06px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text168 />
    </div>
  );
}

function Text169() {
  return (
    <div className="absolute bg-[#00a63e] content-stretch flex h-[23.988px] items-start left-[28.89px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.438px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A</p>
    </div>
  );
}

function TableCell204() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[621.29px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text169 />
    </div>
  );
}

function Text170() {
  return (
    <div className="absolute bg-[#00a63e] content-stretch flex h-[23.988px] items-start left-[28.25px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.438px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A</p>
    </div>
  );
}

function TableCell205() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[711.51px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text170 />
    </div>
  );
}

function Text171() {
  return (
    <div className="absolute bg-[#00a63e] content-stretch flex h-[23.988px] items-start left-[28.25px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.438px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A</p>
    </div>
  );
}

function TableCell206() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[800.45px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text171 />
    </div>
  );
}

function TableCell207() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[889.39px] top-0 w-[74.263px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[37.1px] not-italic text-[#101828] text-[14px] text-center top-[14.99px]">0</p>
    </div>
  );
}

function Text172() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[37.11px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.913px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">0</p>
    </div>
  );
}

function TableCell208() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[963.65px] top-0 w-[105.15px]" data-name="Table Cell">
      <Text172 />
    </div>
  );
}

function TableRow19() {
  return (
    <div className="absolute bg-[#f9fafb] h-[50.388px] left-0 top-[906.58px] w-[1068.8px]" data-name="Table Row">
      <TableCell198 />
      <TableCell199 />
      <TableCell200 />
      <TableCell201 />
      <TableCell202 />
      <TableCell203 />
      <TableCell204 />
      <TableCell205 />
      <TableCell206 />
      <TableCell207 />
      <TableCell208 />
    </div>
  );
}

function TableCell209() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-0 top-0 w-[147.838px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[16px] not-italic text-[#101828] text-[14px] top-[14.99px]">CMA19CS020</p>
    </div>
  );
}

function Text173() {
  return (
    <div className="absolute bg-[#51a2ff] content-stretch flex h-[23.988px] items-start left-[24.23px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[40.188px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">B+</p>
    </div>
  );
}

function TableCell210() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[147.84px] top-0 w-[88.65px]" data-name="Table Cell">
      <Text173 />
    </div>
  );
}

function Text174() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[38.21px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell211() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[236.49px] top-0 w-[107.162px]" data-name="Table Cell">
      <Text174 />
    </div>
  );
}

function Text175() {
  return (
    <div className="absolute bg-[#00c950] content-stretch flex h-[23.988px] items-start left-[28.13px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[40.925px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A+</p>
    </div>
  );
}

function TableCell212() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[343.65px] top-0 w-[97.188px]" data-name="Table Cell">
      <Text175 />
    </div>
  );
}

function Text176() {
  return (
    <div className="absolute bg-[#51a2ff] content-stretch flex h-[23.988px] items-start left-[25.01px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[40.188px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">B+</p>
    </div>
  );
}

function TableCell213() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[440.84px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text176 />
    </div>
  );
}

function Text177() {
  return (
    <div className="absolute bg-[#51a2ff] content-stretch flex h-[23.988px] items-start left-[25.01px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[40.188px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">B+</p>
    </div>
  );
}

function TableCell214() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[531.06px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text177 />
    </div>
  );
}

function Text178() {
  return (
    <div className="absolute bg-[#00a63e] content-stretch flex h-[23.988px] items-start left-[28.89px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.438px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A</p>
    </div>
  );
}

function TableCell215() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[621.29px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text178 />
    </div>
  );
}

function Text179() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[29.1px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell216() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[711.51px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text179 />
    </div>
  );
}

function Text180() {
  return (
    <div className="absolute bg-[#00c950] content-stretch flex h-[23.988px] items-start left-[24px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[40.925px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A+</p>
    </div>
  );
}

function TableCell217() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[800.45px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text180 />
    </div>
  );
}

function TableCell218() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[889.39px] top-0 w-[74.263px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[37.1px] not-italic text-[#101828] text-[14px] text-center top-[14.99px]">0</p>
    </div>
  );
}

function Text181() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[37.11px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.913px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">0</p>
    </div>
  );
}

function TableCell219() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[963.65px] top-0 w-[105.15px]" data-name="Table Cell">
      <Text181 />
    </div>
  );
}

function TableRow20() {
  return (
    <div className="absolute bg-white h-[50.388px] left-0 top-[956.96px] w-[1068.8px]" data-name="Table Row">
      <TableCell209 />
      <TableCell210 />
      <TableCell211 />
      <TableCell212 />
      <TableCell213 />
      <TableCell214 />
      <TableCell215 />
      <TableCell216 />
      <TableCell217 />
      <TableCell218 />
      <TableCell219 />
    </div>
  );
}

function TableCell220() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-0 top-0 w-[147.838px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[16px] not-italic text-[#101828] text-[14px] top-[14.99px]">CMA19CS021</p>
    </div>
  );
}

function Text182() {
  return (
    <div className="absolute bg-[#ffb900] content-stretch flex h-[23.988px] items-start left-[24.34px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[39.975px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">C+</p>
    </div>
  );
}

function TableCell221() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[147.84px] top-0 w-[88.65px]" data-name="Table Cell">
      <Text182 />
    </div>
  );
}

function Text183() {
  return (
    <div className="absolute bg-[#51a2ff] content-stretch flex h-[23.988px] items-start left-[33.49px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[40.188px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">B+</p>
    </div>
  );
}

function TableCell222() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[236.49px] top-0 w-[107.162px]" data-name="Table Cell">
      <Text183 />
    </div>
  );
}

function Text184() {
  return (
    <div className="absolute bg-[#2b7fff] content-stretch flex h-[23.988px] items-start left-[32.74px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.7px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">B</p>
    </div>
  );
}

function TableCell223() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[343.65px] top-0 w-[97.188px]" data-name="Table Cell">
      <Text184 />
    </div>
  );
}

function Text185() {
  return (
    <div className="absolute bg-[#ffb900] content-stretch flex h-[23.988px] items-start left-[25.13px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[39.975px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">C+</p>
    </div>
  );
}

function TableCell224() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[440.84px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text185 />
    </div>
  );
}

function Text186() {
  return (
    <div className="absolute bg-[#fe9a00] content-stretch flex h-[23.988px] items-start left-[29.36px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.5px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">C</p>
    </div>
  );
}

function TableCell225() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[531.06px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text186 />
    </div>
  );
}

function Text187() {
  return (
    <div className="absolute bg-[#ffb900] content-stretch flex h-[23.988px] items-start left-[25.13px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[39.975px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">C+</p>
    </div>
  );
}

function TableCell226() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[621.29px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text187 />
    </div>
  );
}

function Text188() {
  return (
    <div className="absolute bg-[#00a63e] content-stretch flex h-[23.988px] items-start left-[28.25px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.438px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A</p>
    </div>
  );
}

function TableCell227() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[711.51px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text188 />
    </div>
  );
}

function Text189() {
  return (
    <div className="absolute bg-[#2b7fff] content-stretch flex h-[23.988px] items-start left-[28.61px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.7px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">B</p>
    </div>
  );
}

function TableCell228() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[800.45px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text189 />
    </div>
  );
}

function TableCell229() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[889.39px] top-0 w-[74.263px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[37.1px] not-italic text-[#101828] text-[14px] text-center top-[14.99px]">0</p>
    </div>
  );
}

function Text190() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[37.11px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.913px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">0</p>
    </div>
  );
}

function TableCell230() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[963.65px] top-0 w-[105.15px]" data-name="Table Cell">
      <Text190 />
    </div>
  );
}

function TableRow21() {
  return (
    <div className="absolute bg-[#f9fafb] h-[50.388px] left-0 top-[1007.35px] w-[1068.8px]" data-name="Table Row">
      <TableCell220 />
      <TableCell221 />
      <TableCell222 />
      <TableCell223 />
      <TableCell224 />
      <TableCell225 />
      <TableCell226 />
      <TableCell227 />
      <TableCell228 />
      <TableCell229 />
      <TableCell230 />
    </div>
  );
}

function TableCell231() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-0 top-0 w-[147.838px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[16px] not-italic text-[#101828] text-[14px] top-[14.99px]">CMA19CS022</p>
    </div>
  );
}

function Text191() {
  return (
    <div className="absolute bg-[#2b7fff] content-stretch flex h-[23.988px] items-start left-[28.48px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.7px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">B</p>
    </div>
  );
}

function TableCell232() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[147.84px] top-0 w-[88.65px]" data-name="Table Cell">
      <Text191 />
    </div>
  );
}

function Text192() {
  return (
    <div className="absolute bg-[#51a2ff] content-stretch flex h-[23.988px] items-start left-[33.49px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[40.188px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">B+</p>
    </div>
  );
}

function TableCell233() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[236.49px] top-0 w-[107.162px]" data-name="Table Cell">
      <Text192 />
    </div>
  );
}

function Text193() {
  return (
    <div className="absolute bg-[#00c950] content-stretch flex h-[23.988px] items-start left-[28.13px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[40.925px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A+</p>
    </div>
  );
}

function TableCell234() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[343.65px] top-0 w-[97.188px]" data-name="Table Cell">
      <Text193 />
    </div>
  );
}

function Text194() {
  return (
    <div className="absolute bg-[#fe9a00] content-stretch flex h-[23.988px] items-start left-[29.36px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.5px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">C</p>
    </div>
  );
}

function TableCell235() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[440.84px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text194 />
    </div>
  );
}

function Text195() {
  return (
    <div className="absolute bg-[#ffb900] content-stretch flex h-[23.988px] items-start left-[25.13px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[39.975px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">C+</p>
    </div>
  );
}

function TableCell236() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[531.06px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text195 />
    </div>
  );
}

function Text196() {
  return (
    <div className="absolute bg-[#fe9a00] content-stretch flex h-[23.988px] items-start left-[29.36px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.5px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">C</p>
    </div>
  );
}

function TableCell237() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[621.29px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text196 />
    </div>
  );
}

function Text197() {
  return (
    <div className="absolute bg-[#00a63e] content-stretch flex h-[23.988px] items-start left-[28.25px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.438px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A</p>
    </div>
  );
}

function TableCell238() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[711.51px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text197 />
    </div>
  );
}

function Text198() {
  return (
    <div className="absolute bg-[#00c950] content-stretch flex h-[23.988px] items-start left-[24px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[40.925px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A+</p>
    </div>
  );
}

function TableCell239() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[800.45px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text198 />
    </div>
  );
}

function TableCell240() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[889.39px] top-0 w-[74.263px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[37.1px] not-italic text-[#101828] text-[14px] text-center top-[14.99px]">0</p>
    </div>
  );
}

function Text199() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[37.11px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.913px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">0</p>
    </div>
  );
}

function TableCell241() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[963.65px] top-0 w-[105.15px]" data-name="Table Cell">
      <Text199 />
    </div>
  );
}

function TableRow22() {
  return (
    <div className="absolute bg-white h-[50.388px] left-0 top-[1057.74px] w-[1068.8px]" data-name="Table Row">
      <TableCell231 />
      <TableCell232 />
      <TableCell233 />
      <TableCell234 />
      <TableCell235 />
      <TableCell236 />
      <TableCell237 />
      <TableCell238 />
      <TableCell239 />
      <TableCell240 />
      <TableCell241 />
    </div>
  );
}

function TableCell242() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-0 top-0 w-[147.838px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[16px] not-italic text-[#101828] text-[14px] top-[14.99px]">CMA19CS024</p>
    </div>
  );
}

function Text200() {
  return (
    <div className="absolute bg-[#ffb900] content-stretch flex h-[23.988px] items-start left-[24.34px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[39.975px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">C+</p>
    </div>
  );
}

function TableCell243() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[147.84px] top-0 w-[88.65px]" data-name="Table Cell">
      <Text200 />
    </div>
  );
}

function Text201() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[38.21px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell244() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[236.49px] top-0 w-[107.162px]" data-name="Table Cell">
      <Text201 />
    </div>
  );
}

function Text202() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[33.23px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell245() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[343.65px] top-0 w-[97.188px]" data-name="Table Cell">
      <Text202 />
    </div>
  );
}

function Text203() {
  return (
    <div className="absolute bg-[#ffb900] content-stretch flex h-[23.988px] items-start left-[25.13px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[39.975px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">C+</p>
    </div>
  );
}

function TableCell246() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[440.84px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text203 />
    </div>
  );
}

function Text204() {
  return (
    <div className="absolute bg-[#ffb900] content-stretch flex h-[23.988px] items-start left-[25.13px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[39.975px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">C+</p>
    </div>
  );
}

function TableCell247() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[531.06px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text204 />
    </div>
  );
}

function Text205() {
  return (
    <div className="absolute bg-[#00a63e] content-stretch flex h-[23.988px] items-start left-[28.89px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.438px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A</p>
    </div>
  );
}

function TableCell248() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[621.29px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text205 />
    </div>
  );
}

function Text206() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[29.1px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell249() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[711.51px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text206 />
    </div>
  );
}

function Text207() {
  return (
    <div className="absolute bg-[#00c950] content-stretch flex h-[23.988px] items-start left-[24px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[40.925px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A+</p>
    </div>
  );
}

function TableCell250() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[800.45px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text207 />
    </div>
  );
}

function TableCell251() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[889.39px] top-0 w-[74.263px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[37.1px] not-italic text-[#101828] text-[14px] text-center top-[14.99px]">0</p>
    </div>
  );
}

function Text208() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[37.11px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.913px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">0</p>
    </div>
  );
}

function TableCell252() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[963.65px] top-0 w-[105.15px]" data-name="Table Cell">
      <Text208 />
    </div>
  );
}

function TableRow23() {
  return (
    <div className="absolute bg-[#f9fafb] h-[50.388px] left-0 top-[1108.13px] w-[1068.8px]" data-name="Table Row">
      <TableCell242 />
      <TableCell243 />
      <TableCell244 />
      <TableCell245 />
      <TableCell246 />
      <TableCell247 />
      <TableCell248 />
      <TableCell249 />
      <TableCell250 />
      <TableCell251 />
      <TableCell252 />
    </div>
  );
}

function TableCell253() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-0 top-0 w-[147.838px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[16px] not-italic text-[#101828] text-[14px] top-[14.99px]">CMA19CS025</p>
    </div>
  );
}

function Text209() {
  return (
    <div className="absolute bg-[#ffb900] content-stretch flex h-[23.988px] items-start left-[24.34px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[39.975px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">C+</p>
    </div>
  );
}

function TableCell254() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[147.84px] top-0 w-[88.65px]" data-name="Table Cell">
      <Text209 />
    </div>
  );
}

function Text210() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[38.21px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell255() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[236.49px] top-0 w-[107.162px]" data-name="Table Cell">
      <Text210 />
    </div>
  );
}

function Text211() {
  return (
    <div className="absolute bg-[#00a63e] content-stretch flex h-[23.988px] items-start left-[32.38px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.438px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A</p>
    </div>
  );
}

function TableCell256() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[343.65px] top-0 w-[97.188px]" data-name="Table Cell">
      <Text211 />
    </div>
  );
}

function Text212() {
  return (
    <div className="absolute bg-[#ffb900] content-stretch flex h-[23.988px] items-start left-[25.13px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[39.975px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">C+</p>
    </div>
  );
}

function TableCell257() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[440.84px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text212 />
    </div>
  );
}

function Text213() {
  return (
    <div className="absolute bg-[#fe9a00] content-stretch flex h-[23.988px] items-start left-[29.36px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.5px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">C</p>
    </div>
  );
}

function TableCell258() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[531.06px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text213 />
    </div>
  );
}

function Text214() {
  return (
    <div className="absolute bg-[#fb2c36] content-stretch flex h-[23.988px] items-start left-[29.42px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.375px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">P</p>
    </div>
  );
}

function TableCell259() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[621.29px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text214 />
    </div>
  );
}

function Text215() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[29.1px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell260() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[711.51px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text215 />
    </div>
  );
}

function Text216() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[29.1px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell261() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[800.45px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text216 />
    </div>
  );
}

function TableCell262() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[889.39px] top-0 w-[74.263px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[37.1px] not-italic text-[#101828] text-[14px] text-center top-[14.99px]">0</p>
    </div>
  );
}

function Text217() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[37.11px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.913px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">0</p>
    </div>
  );
}

function TableCell263() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[963.65px] top-0 w-[105.15px]" data-name="Table Cell">
      <Text217 />
    </div>
  );
}

function TableRow24() {
  return (
    <div className="absolute bg-white h-[50.388px] left-0 top-[1158.51px] w-[1068.8px]" data-name="Table Row">
      <TableCell253 />
      <TableCell254 />
      <TableCell255 />
      <TableCell256 />
      <TableCell257 />
      <TableCell258 />
      <TableCell259 />
      <TableCell260 />
      <TableCell261 />
      <TableCell262 />
      <TableCell263 />
    </div>
  );
}

function TableCell264() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-0 top-0 w-[147.838px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[16px] not-italic text-[#101828] text-[14px] top-[14.99px]">CMA19CS026</p>
    </div>
  );
}

function Text218() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[29.2px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.25px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">F</p>
    </div>
  );
}

function TableCell265() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[147.84px] top-0 w-[88.65px]" data-name="Table Cell">
      <Text218 />
    </div>
  );
}

function Text219() {
  return (
    <div className="absolute bg-[#99a1af] content-stretch flex h-[23.988px] items-start left-[21.79px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[63.588px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">Absent</p>
    </div>
  );
}

function TableCell266() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[236.49px] top-0 w-[107.162px]" data-name="Table Cell">
      <Text219 />
    </div>
  );
}

function Text220() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[33.46px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.25px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">F</p>
    </div>
  );
}

function TableCell267() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[343.65px] top-0 w-[97.188px]" data-name="Table Cell">
      <Text220 />
    </div>
  );
}

function Text221() {
  return (
    <div className="absolute bg-[#ffb900] content-stretch flex h-[23.988px] items-start left-[25.13px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[39.975px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">C+</p>
    </div>
  );
}

function TableCell268() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[440.84px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text221 />
    </div>
  );
}

function Text222() {
  return (
    <div className="absolute bg-[#2b7fff] content-stretch flex h-[23.988px] items-start left-[29.26px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.7px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">B</p>
    </div>
  );
}

function TableCell269() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[531.06px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text222 />
    </div>
  );
}

function Text223() {
  return (
    <div className="absolute bg-[#fb2c36] content-stretch flex h-[23.988px] items-start left-[29.42px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.375px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">P</p>
    </div>
  );
}

function TableCell270() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[621.29px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text223 />
    </div>
  );
}

function Text224() {
  return (
    <div className="absolute bg-[#00a63e] content-stretch flex h-[23.988px] items-start left-[28.25px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.438px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A</p>
    </div>
  );
}

function TableCell271() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[711.51px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text224 />
    </div>
  );
}

function Text225() {
  return (
    <div className="absolute bg-[#2b7fff] content-stretch flex h-[23.988px] items-start left-[28.61px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.7px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">B</p>
    </div>
  );
}

function TableCell272() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[800.45px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text225 />
    </div>
  );
}

function TableCell273() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[889.39px] top-0 w-[74.263px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[37.1px] not-italic text-[#101828] text-[14px] text-center top-[14.99px]">0</p>
    </div>
  );
}

function Text226() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[37.11px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.913px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">3</p>
    </div>
  );
}

function TableCell274() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[963.65px] top-0 w-[105.15px]" data-name="Table Cell">
      <Text226 />
    </div>
  );
}

function TableRow25() {
  return (
    <div className="absolute bg-[#f9fafb] h-[50.388px] left-0 top-[1208.9px] w-[1068.8px]" data-name="Table Row">
      <TableCell264 />
      <TableCell265 />
      <TableCell266 />
      <TableCell267 />
      <TableCell268 />
      <TableCell269 />
      <TableCell270 />
      <TableCell271 />
      <TableCell272 />
      <TableCell273 />
      <TableCell274 />
    </div>
  );
}

function TableCell275() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-0 top-0 w-[147.838px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[16px] not-italic text-[#101828] text-[14px] top-[14.99px]">CMA19CS027</p>
    </div>
  );
}

function Text227() {
  return (
    <div className="absolute bg-[#fe9a00] content-stretch flex h-[23.988px] items-start left-[28.57px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.5px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">C</p>
    </div>
  );
}

function TableCell276() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[147.84px] top-0 w-[88.65px]" data-name="Table Cell">
      <Text227 />
    </div>
  );
}

function Text228() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[38.21px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell277() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[236.49px] top-0 w-[107.162px]" data-name="Table Cell">
      <Text228 />
    </div>
  );
}

function Text229() {
  return (
    <div className="absolute bg-[#ffb900] content-stretch flex h-[23.988px] items-start left-[28.6px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[39.975px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">C+</p>
    </div>
  );
}

function TableCell278() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[343.65px] top-0 w-[97.188px]" data-name="Table Cell">
      <Text229 />
    </div>
  );
}

function Text230() {
  return (
    <div className="absolute bg-[#ff6900] content-stretch flex h-[23.988px] items-start left-[28.69px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.85px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">D</p>
    </div>
  );
}

function TableCell279() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[440.84px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text230 />
    </div>
  );
}

function Text231() {
  return (
    <div className="absolute bg-[#ff6900] content-stretch flex h-[23.988px] items-start left-[28.69px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.85px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">D</p>
    </div>
  );
}

function TableCell280() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[531.06px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text231 />
    </div>
  );
}

function Text232() {
  return (
    <div className="absolute bg-[#ff6900] content-stretch flex h-[23.988px] items-start left-[28.69px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.85px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">D</p>
    </div>
  );
}

function TableCell281() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[621.29px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text232 />
    </div>
  );
}

function Text233() {
  return (
    <div className="absolute bg-[#51a2ff] content-stretch flex h-[23.988px] items-start left-[24.38px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[40.188px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">B+</p>
    </div>
  );
}

function TableCell282() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[711.51px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text233 />
    </div>
  );
}

function Text234() {
  return (
    <div className="absolute bg-[#ff6900] content-stretch flex h-[23.988px] items-start left-[28.04px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.85px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">D</p>
    </div>
  );
}

function TableCell283() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[800.45px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text234 />
    </div>
  );
}

function TableCell284() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[889.39px] top-0 w-[74.263px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[37.1px] not-italic text-[#101828] text-[14px] text-center top-[14.99px]">0</p>
    </div>
  );
}

function Text235() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[37.11px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.913px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">0</p>
    </div>
  );
}

function TableCell285() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[963.65px] top-0 w-[105.15px]" data-name="Table Cell">
      <Text235 />
    </div>
  );
}

function TableRow26() {
  return (
    <div className="absolute bg-white h-[50.388px] left-0 top-[1259.29px] w-[1068.8px]" data-name="Table Row">
      <TableCell275 />
      <TableCell276 />
      <TableCell277 />
      <TableCell278 />
      <TableCell279 />
      <TableCell280 />
      <TableCell281 />
      <TableCell282 />
      <TableCell283 />
      <TableCell284 />
      <TableCell285 />
    </div>
  );
}

function TableCell286() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-0 top-0 w-[147.838px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[16px] not-italic text-[#101828] text-[14px] top-[14.99px]">CMA19CS028</p>
    </div>
  );
}

function Text236() {
  return (
    <div className="absolute bg-[#51a2ff] content-stretch flex h-[23.988px] items-start left-[24.23px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[40.188px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">B+</p>
    </div>
  );
}

function TableCell287() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[147.84px] top-0 w-[88.65px]" data-name="Table Cell">
      <Text236 />
    </div>
  );
}

function Text237() {
  return (
    <div className="absolute bg-[#00c950] content-stretch flex h-[23.988px] items-start left-[33.11px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[40.925px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A+</p>
    </div>
  );
}

function TableCell288() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[236.49px] top-0 w-[107.162px]" data-name="Table Cell">
      <Text237 />
    </div>
  );
}

function Text238() {
  return (
    <div className="absolute bg-[#fb2c36] content-stretch flex h-[23.988px] items-start left-[32.9px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.375px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">P</p>
    </div>
  );
}

function TableCell289() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[343.65px] top-0 w-[97.188px]" data-name="Table Cell">
      <Text238 />
    </div>
  );
}

function Text239() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[29.99px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.25px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">F</p>
    </div>
  );
}

function TableCell290() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[440.84px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text239 />
    </div>
  );
}

function Text240() {
  return (
    <div className="absolute bg-[#fb2c36] content-stretch flex h-[23.988px] items-start left-[29.42px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.375px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">P</p>
    </div>
  );
}

function TableCell291() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[531.06px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text240 />
    </div>
  );
}

function Text241() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[29.99px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.25px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">F</p>
    </div>
  );
}

function TableCell292() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[621.29px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text241 />
    </div>
  );
}

function Text242() {
  return (
    <div className="absolute bg-[#00a63e] content-stretch flex h-[23.988px] items-start left-[28.25px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.438px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A</p>
    </div>
  );
}

function TableCell293() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[711.51px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text242 />
    </div>
  );
}

function Text243() {
  return (
    <div className="absolute bg-[#51a2ff] content-stretch flex h-[23.988px] items-start left-[24.38px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[40.188px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">B+</p>
    </div>
  );
}

function TableCell294() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[800.45px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text243 />
    </div>
  );
}

function TableCell295() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[889.39px] top-0 w-[74.263px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[37.1px] not-italic text-[#101828] text-[14px] text-center top-[14.99px]">0</p>
    </div>
  );
}

function Text244() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[37.11px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.913px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">2</p>
    </div>
  );
}

function TableCell296() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[963.65px] top-0 w-[105.15px]" data-name="Table Cell">
      <Text244 />
    </div>
  );
}

function TableRow27() {
  return (
    <div className="absolute bg-[#f9fafb] h-[50.388px] left-0 top-[1309.68px] w-[1068.8px]" data-name="Table Row">
      <TableCell286 />
      <TableCell287 />
      <TableCell288 />
      <TableCell289 />
      <TableCell290 />
      <TableCell291 />
      <TableCell292 />
      <TableCell293 />
      <TableCell294 />
      <TableCell295 />
      <TableCell296 />
    </div>
  );
}

function TableCell297() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-0 top-0 w-[147.838px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[16px] not-italic text-[#101828] text-[14px] top-[14.99px]">CMA19CS029</p>
    </div>
  );
}

function Text245() {
  return (
    <div className="absolute bg-[#ff6900] content-stretch flex h-[23.988px] items-start left-[27.9px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.85px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">D</p>
    </div>
  );
}

function TableCell298() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[147.84px] top-0 w-[88.65px]" data-name="Table Cell">
      <Text245 />
    </div>
  );
}

function Text246() {
  return (
    <div className="absolute bg-[#00a63e] content-stretch flex h-[23.988px] items-start left-[37.36px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.438px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A</p>
    </div>
  );
}

function TableCell299() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[236.49px] top-0 w-[107.162px]" data-name="Table Cell">
      <Text246 />
    </div>
  );
}

function Text247() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[33.46px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.25px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">F</p>
    </div>
  );
}

function TableCell300() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[343.65px] top-0 w-[97.188px]" data-name="Table Cell">
      <Text247 />
    </div>
  );
}

function Text248() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[29.99px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.25px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">F</p>
    </div>
  );
}

function TableCell301() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[440.84px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text248 />
    </div>
  );
}

function Text249() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[29.99px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.25px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">F</p>
    </div>
  );
}

function TableCell302() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[531.06px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text249 />
    </div>
  );
}

function Text250() {
  return (
    <div className="absolute bg-[#fe9a00] content-stretch flex h-[23.988px] items-start left-[29.36px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.5px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">C</p>
    </div>
  );
}

function TableCell303() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[621.29px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text250 />
    </div>
  );
}

function Text251() {
  return (
    <div className="absolute bg-[#51a2ff] content-stretch flex h-[23.988px] items-start left-[24.38px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[40.188px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">B+</p>
    </div>
  );
}

function TableCell304() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[711.51px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text251 />
    </div>
  );
}

function Text252() {
  return (
    <div className="absolute bg-[#2b7fff] content-stretch flex h-[23.988px] items-start left-[28.61px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[31.7px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">B</p>
    </div>
  );
}

function TableCell305() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[800.45px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text252 />
    </div>
  );
}

function TableCell306() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[889.39px] top-0 w-[74.263px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[37.1px] not-italic text-[#101828] text-[14px] text-center top-[14.99px]">0</p>
    </div>
  );
}

function Text253() {
  return (
    <div className="absolute bg-[#e7000b] content-stretch flex h-[23.988px] items-start left-[37.11px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.913px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">3</p>
    </div>
  );
}

function TableCell307() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[963.65px] top-0 w-[105.15px]" data-name="Table Cell">
      <Text253 />
    </div>
  );
}

function TableRow28() {
  return (
    <div className="absolute bg-white h-[50.388px] left-0 top-[1360.06px] w-[1068.8px]" data-name="Table Row">
      <TableCell297 />
      <TableCell298 />
      <TableCell299 />
      <TableCell300 />
      <TableCell301 />
      <TableCell302 />
      <TableCell303 />
      <TableCell304 />
      <TableCell305 />
      <TableCell306 />
      <TableCell307 />
    </div>
  );
}

function TableCell308() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-0 top-0 w-[147.838px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[16px] not-italic text-[#101828] text-[14px] top-[14.99px]">CMA19CS030</p>
    </div>
  );
}

function Text254() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[28.95px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell309() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[147.84px] top-0 w-[88.65px]" data-name="Table Cell">
      <Text254 />
    </div>
  );
}

function Text255() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[38.21px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell310() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[236.49px] top-0 w-[107.162px]" data-name="Table Cell">
      <Text255 />
    </div>
  );
}

function Text256() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[33.23px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell311() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[343.65px] top-0 w-[97.188px]" data-name="Table Cell">
      <Text256 />
    </div>
  );
}

function Text257() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[29.74px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell312() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[440.84px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text257 />
    </div>
  );
}

function Text258() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[29.74px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell313() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[531.06px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text258 />
    </div>
  );
}

function Text259() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[29.74px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell314() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[621.29px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text259 />
    </div>
  );
}

function Text260() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[29.1px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell315() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[711.51px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text260 />
    </div>
  );
}

function Text261() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[29.1px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell316() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[800.45px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text261 />
    </div>
  );
}

function TableCell317() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[889.39px] top-0 w-[74.263px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[37.1px] not-italic text-[#101828] text-[14px] text-center top-[14.99px]">0</p>
    </div>
  );
}

function Text262() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[37.11px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.913px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">0</p>
    </div>
  );
}

function TableCell318() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[963.65px] top-0 w-[105.15px]" data-name="Table Cell">
      <Text262 />
    </div>
  );
}

function TableRow29() {
  return (
    <div className="absolute bg-[#f9fafb] h-[50.388px] left-0 top-[1410.45px] w-[1068.8px]" data-name="Table Row">
      <TableCell308 />
      <TableCell309 />
      <TableCell310 />
      <TableCell311 />
      <TableCell312 />
      <TableCell313 />
      <TableCell314 />
      <TableCell315 />
      <TableCell316 />
      <TableCell317 />
      <TableCell318 />
    </div>
  );
}

function TableCell319() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-0 top-0 w-[147.838px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[16px] not-italic text-[#101828] text-[14px] top-[14.99px]">CMA19CS031</p>
    </div>
  );
}

function Text263() {
  return (
    <div className="absolute bg-[#00c950] content-stretch flex h-[23.988px] items-start left-[23.86px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[40.925px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A+</p>
    </div>
  );
}

function TableCell320() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[147.84px] top-0 w-[88.65px]" data-name="Table Cell">
      <Text263 />
    </div>
  );
}

function Text264() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[38.21px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell321() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[236.49px] top-0 w-[107.162px]" data-name="Table Cell">
      <Text264 />
    </div>
  );
}

function Text265() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[33.23px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell322() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[343.65px] top-0 w-[97.188px]" data-name="Table Cell">
      <Text265 />
    </div>
  );
}

function Text266() {
  return (
    <div className="absolute bg-[#00a63e] content-stretch flex h-[23.988px] items-start left-[28.89px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[32.438px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A</p>
    </div>
  );
}

function TableCell323() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[440.84px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text266 />
    </div>
  );
}

function Text267() {
  return (
    <div className="absolute bg-[#51a2ff] content-stretch flex h-[23.988px] items-start left-[25.01px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[40.188px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">B+</p>
    </div>
  );
}

function TableCell324() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[531.06px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text267 />
    </div>
  );
}

function Text268() {
  return (
    <div className="absolute bg-[#00c950] content-stretch flex h-[23.988px] items-start left-[24.65px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[40.925px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">A+</p>
    </div>
  );
}

function TableCell325() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[621.29px] top-0 w-[90.225px]" data-name="Table Cell">
      <Text268 />
    </div>
  );
}

function Text269() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[29.1px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell326() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[711.51px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text269 />
    </div>
  );
}

function Text270() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[29.1px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.738px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">S</p>
    </div>
  );
}

function TableCell327() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[800.45px] top-0 w-[88.938px]" data-name="Table Cell">
      <Text270 />
    </div>
  );
}

function TableCell328() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[889.39px] top-0 w-[74.263px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[37.1px] not-italic text-[#101828] text-[14px] text-center top-[14.99px]">0</p>
    </div>
  );
}

function Text271() {
  return (
    <div className="absolute bg-[#00bc7d] content-stretch flex h-[23.988px] items-start left-[37.11px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[14px] w-[30.913px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">0</p>
    </div>
  );
}

function TableCell329() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[50.388px] left-[963.65px] top-0 w-[105.15px]" data-name="Table Cell">
      <Text271 />
    </div>
  );
}

function TableRow30() {
  return (
    <div className="absolute bg-white h-[50.388px] left-0 top-[1460.84px] w-[1068.8px]" data-name="Table Row">
      <TableCell319 />
      <TableCell320 />
      <TableCell321 />
      <TableCell322 />
      <TableCell323 />
      <TableCell324 />
      <TableCell325 />
      <TableCell326 />
      <TableCell327 />
      <TableCell328 />
      <TableCell329 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute bg-white h-[1511.225px] left-0 top-[44px] w-[1068.8px]" data-name="Table Body">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
      <TableRow5 />
      <TableRow6 />
      <TableRow7 />
      <TableRow8 />
      <TableRow9 />
      <TableRow10 />
      <TableRow11 />
      <TableRow12 />
      <TableRow13 />
      <TableRow14 />
      <TableRow15 />
      <TableRow16 />
      <TableRow17 />
      <TableRow18 />
      <TableRow19 />
      <TableRow20 />
      <TableRow21 />
      <TableRow22 />
      <TableRow23 />
      <TableRow24 />
      <TableRow25 />
      <TableRow26 />
      <TableRow27 />
      <TableRow28 />
      <TableRow29 />
      <TableRow30 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[1555.625px] relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[1557.225px] relative rounded-[10px] shrink-0 w-[1070.4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[0.8px] relative rounded-[inherit] size-full">
        <Table />
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[-0.2px]">Performance Key</p>
    </div>
  );
}

function Text272() {
  return (
    <div className="bg-[#00bc7d] h-[23.988px] relative rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 w-[30.738px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[4px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-white">S</p>
      </div>
    </div>
  );
}

function Text273() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[65.8px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px]">Outstanding</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[23.988px] items-center left-0 top-0 w-[102.537px]" data-name="Container">
      <Text272 />
      <Text273 />
    </div>
  );
}

function Text274() {
  return (
    <div className="bg-[#00c950] h-[23.988px] relative rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 w-[32.438px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[4px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-white">A</p>
      </div>
    </div>
  );
}

function Text275() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[46.35px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px]">Excellent</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[23.988px] items-center left-[112.54px] top-0 w-[84.787px]" data-name="Container">
      <Text274 />
      <Text275 />
    </div>
  );
}

function Text276() {
  return (
    <div className="bg-[#2b7fff] h-[23.988px] relative rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 w-[31.7px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[4px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-white">B</p>
      </div>
    </div>
  );
}

function Text277() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[29.363px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px]">Good</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[23.988px] items-center left-[207.32px] top-0 w-[67.063px]" data-name="Container">
      <Text276 />
      <Text277 />
    </div>
  );
}

function Text278() {
  return (
    <div className="bg-[#fe9a00] h-[23.988px] relative rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 w-[31.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[4px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-white">C</p>
      </div>
    </div>
  );
}

function Text279() {
  return (
    <div className="flex-[1_0_0] h-[15.988px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px]">Average</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[23.988px] items-center left-[284.39px] top-0 w-[80.65px]" data-name="Container">
      <Text278 />
      <Text279 />
    </div>
  );
}

function Text280() {
  return (
    <div className="bg-[#ff6900] h-[23.988px] relative rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 w-[32.85px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[4px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-white">D</p>
      </div>
    </div>
  );
}

function Text281() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[55.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px]">Below Avg</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[23.988px] items-center left-[375.04px] top-0 w-[94.225px]" data-name="Container">
      <Text280 />
      <Text281 />
    </div>
  );
}

function Text282() {
  return (
    <div className="bg-[#e7000b] flex-[1_0_0] h-[23.988px] min-h-px min-w-px relative rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[4px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-white">F</p>
      </div>
    </div>
  );
}

function Text283() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[17.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px]">Fail</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[23.988px] items-center left-[479.26px] top-0 w-[53.625px]" data-name="Container">
      <Text282 />
      <Text283 />
    </div>
  );
}

function Text284() {
  return (
    <div className="bg-[#99a1af] h-[23.988px] relative rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 w-[39.888px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[4px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-white">Ab</p>
      </div>
    </div>
  );
}

function Text285() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[37.025px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px]">Absent</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[23.988px] items-center left-[542.89px] top-0 w-[82.912px]" data-name="Container">
      <Text284 />
      <Text285 />
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[23.988px] relative shrink-0 w-full" data-name="Container">
      <Container38 />
      <Container39 />
      <Container40 />
      <Container41 />
      <Container42 />
      <Container43 />
      <Container44 />
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[66.787px] relative shrink-0 w-[1070.4px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start pt-[12.8px] relative size-full">
        <Heading3 />
        <Container37 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-white h-[1765.613px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start pb-[0.8px] pl-[16.8px] pr-[0.8px] pt-[16.8px] relative size-full">
          <Heading2 />
          <Container35 />
          <Container36 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[28px] relative shrink-0 w-[1070.4px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-[-1.4px]">Performance Analysis of All Students</p>
      </div>
    </div>
  );
}

function HeaderCell11() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.2)] border-r-[0.8px] border-solid h-[40px] left-0 top-0 w-[221.387px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[16px] not-italic text-[14px] text-white top-[9.8px]">Metric</p>
    </div>
  );
}

function HeaderCell12() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.2)] border-r-[0.8px] border-solid h-[40px] left-[221.39px] top-0 w-[102.287px]" data-name="Header Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[51.31px] not-italic text-[14px] text-center text-white top-[9.8px]">EST200</p>
    </div>
  );
}

function HeaderCell13() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.2)] border-r-[0.8px] border-solid h-[40px] left-[323.67px] top-0 w-[115.975px]" data-name="Header Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[58.8px] not-italic text-[14px] text-center text-white top-[9.8px]">MCN201</p>
    </div>
  );
}

function HeaderCell14() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.2)] border-r-[0.8px] border-solid h-[40px] left-[439.65px] top-0 w-[112.125px]" data-name="Header Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[55.74px] not-italic text-[14px] text-center text-white top-[9.8px]">MAT203</p>
    </div>
  );
}

function HeaderCell15() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.2)] border-r-[0.8px] border-solid h-[40px] left-[551.78px] top-0 w-[104.1px]" data-name="Header Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[52.08px] not-italic text-[14px] text-center text-white top-[9.8px]">CST201</p>
    </div>
  );
}

function HeaderCell16() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.2)] border-r-[0.8px] border-solid h-[40px] left-[655.88px] top-0 w-[104.1px]" data-name="Header Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[52.07px] not-italic text-[14px] text-center text-white top-[9.8px]">CST203</p>
    </div>
  );
}

function HeaderCell17() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.2)] border-r-[0.8px] border-solid h-[40px] left-[759.98px] top-0 w-[104.1px]" data-name="Header Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[52.08px] not-italic text-[14px] text-center text-white top-[9.8px]">CST205</p>
    </div>
  );
}

function HeaderCell18() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.2)] border-r-[0.8px] border-solid h-[40px] left-[864.08px] top-0 w-[102.613px]" data-name="Header Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[51.85px] not-italic text-[14px] text-center text-white top-[9.8px]">CSL201</p>
    </div>
  );
}

function HeaderCell19() {
  return (
    <div className="absolute h-[40px] left-[966.69px] top-0 w-[102.113px]" data-name="Header Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[51.3px] not-italic text-[14px] text-center text-white top-[9.8px]">CSL203</p>
    </div>
  );
}

function TableRow31() {
  return (
    <div className="absolute bg-gradient-to-r from-[#155dfc] h-[40px] left-0 to-[#009689] top-0 w-[1068.8px]" data-name="Table Row">
      <HeaderCell11 />
      <HeaderCell12 />
      <HeaderCell13 />
      <HeaderCell14 />
      <HeaderCell15 />
      <HeaderCell16 />
      <HeaderCell17 />
      <HeaderCell18 />
      <HeaderCell19 />
    </div>
  );
}

function TableHeader1() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[1068.8px]" data-name="Table Header">
      <TableRow31 />
    </div>
  );
}

function TableCell330() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[40.4px] left-0 top-0 w-[221.387px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[16px] not-italic text-[#101828] text-[14px] top-[9.8px]">Pass Percentage</p>
    </div>
  );
}

function TableCell331() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[40.4px] left-[221.39px] top-0 w-[102.287px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[50.85px] not-italic text-[#101828] text-[14px] text-center top-[9.8px]">86.84%</p>
    </div>
  );
}

function TableCell332() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[40.4px] left-[323.67px] top-0 w-[115.975px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[58.61px] not-italic text-[#101828] text-[14px] text-center top-[9.8px]">97.37%</p>
    </div>
  );
}

function TableCell333() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[40.4px] left-[439.65px] top-0 w-[112.125px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[56.64px] not-italic text-[#101828] text-[14px] text-center top-[9.8px]">71.05%</p>
    </div>
  );
}

function TableCell334() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[40.4px] left-[551.78px] top-0 w-[104.1px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[52.54px] not-italic text-[#101828] text-[14px] text-center top-[9.8px]">73.68%</p>
    </div>
  );
}

function TableCell335() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[40.4px] left-[655.88px] top-0 w-[104.1px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[52.04px] not-italic text-[#101828] text-[14px] text-center top-[9.8px]">76.32%</p>
    </div>
  );
}

function TableCell336() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[40.4px] left-[759.98px] top-0 w-[104.1px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[52.54px] not-italic text-[#101828] text-[14px] text-center top-[9.8px]">73.68%</p>
    </div>
  );
}

function TableCell337() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[40.4px] left-[864.08px] top-0 w-[102.613px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[50.83px] not-italic text-[#101828] text-[14px] text-center top-[9.8px]">100%</p>
    </div>
  );
}

function TableCell338() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[40.4px] left-[966.69px] top-0 w-[102.113px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[51.67px] not-italic text-[#101828] text-[14px] text-center top-[9.8px]">97.37%</p>
    </div>
  );
}

function TableRow32() {
  return (
    <div className="absolute bg-[#ecfdf5] h-[40.4px] left-0 top-0 w-[1068.8px]" data-name="Table Row">
      <TableCell330 />
      <TableCell331 />
      <TableCell332 />
      <TableCell333 />
      <TableCell334 />
      <TableCell335 />
      <TableCell336 />
      <TableCell337 />
      <TableCell338 />
    </div>
  );
}

function TableCell339() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[40.8px] left-0 top-0 w-[221.387px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[16px] not-italic text-[#101828] text-[14px] top-[10.2px]">Pass Count</p>
    </div>
  );
}

function TableCell340() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[40.8px] left-[221.39px] top-0 w-[102.287px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[51.59px] not-italic text-[#101828] text-[14px] text-center top-[10.2px]">33</p>
    </div>
  );
}

function TableCell341() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[40.8px] left-[323.67px] top-0 w-[115.975px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[58.94px] not-italic text-[#101828] text-[14px] text-center top-[10.2px]">37</p>
    </div>
  );
}

function TableCell342() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[40.8px] left-[439.65px] top-0 w-[112.125px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[57.01px] not-italic text-[#101828] text-[14px] text-center top-[10.2px]">27</p>
    </div>
  );
}

function TableCell343() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[40.8px] left-[551.78px] top-0 w-[104.1px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.5px] not-italic text-[#101828] text-[14px] text-center top-[10.2px]">28</p>
    </div>
  );
}

function TableCell344() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[40.8px] left-[655.88px] top-0 w-[104.1px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.5px] not-italic text-[#101828] text-[14px] text-center top-[10.2px]">29</p>
    </div>
  );
}

function TableCell345() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[40.8px] left-[759.98px] top-0 w-[104.1px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.5px] not-italic text-[#101828] text-[14px] text-center top-[10.2px]">28</p>
    </div>
  );
}

function TableCell346() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[40.8px] left-[864.08px] top-0 w-[102.613px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[51.75px] not-italic text-[#101828] text-[14px] text-center top-[10.2px]">38</p>
    </div>
  );
}

function TableCell347() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[40.8px] left-[966.69px] top-0 w-[102.113px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52px] not-italic text-[#101828] text-[14px] text-center top-[10.2px]">37</p>
    </div>
  );
}

function TableRow33() {
  return (
    <div className="absolute bg-[#f9fafb] h-[40.8px] left-0 top-[40.4px] w-[1068.8px]" data-name="Table Row">
      <TableCell339 />
      <TableCell340 />
      <TableCell341 />
      <TableCell342 />
      <TableCell343 />
      <TableCell344 />
      <TableCell345 />
      <TableCell346 />
      <TableCell347 />
    </div>
  );
}

function TableCell348() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-0 top-0 w-[221.387px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[16px] not-italic text-[#101828] text-[14px] top-[12.2px]">Fail Count</p>
    </div>
  );
}

function TableCell349() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[221.39px] top-0 w-[102.287px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[51.86px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">5</p>
    </div>
  );
}

function TableCell350() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[323.67px] top-0 w-[115.975px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[58.71px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">1</p>
    </div>
  );
}

function TableCell351() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[439.65px] top-0 w-[112.125px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[56.51px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">11</p>
    </div>
  );
}

function TableCell352() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[551.78px] top-0 w-[104.1px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.5px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">10</p>
    </div>
  );
}

function TableCell353() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[655.88px] top-0 w-[104.1px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.77px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">9</p>
    </div>
  );
}

function TableCell354() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[759.98px] top-0 w-[104.1px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.5px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">10</p>
    </div>
  );
}

function TableCell355() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[864.08px] top-0 w-[102.613px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.03px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">0</p>
    </div>
  );
}

function TableCell356() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[966.69px] top-0 w-[102.113px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[51.77px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">1</p>
    </div>
  );
}

function TableRow34() {
  return (
    <div className="absolute bg-white h-[44.8px] left-0 top-[81.2px] w-[1068.8px]" data-name="Table Row">
      <TableCell348 />
      <TableCell349 />
      <TableCell350 />
      <TableCell351 />
      <TableCell352 />
      <TableCell353 />
      <TableCell354 />
      <TableCell355 />
      <TableCell356 />
    </div>
  );
}

function TableCell357() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-0 top-0 w-[221.387px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[24px] not-italic text-[#101828] text-[14px] top-[12.2px]">No of S grades</p>
    </div>
  );
}

function TableCell358() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[221.39px] top-0 w-[102.287px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[51.86px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">2</p>
    </div>
  );
}

function TableCell359() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[323.67px] top-0 w-[115.975px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[58.94px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">27</p>
    </div>
  );
}

function TableCell360() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[439.65px] top-0 w-[112.125px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[56.29px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">7</p>
    </div>
  );
}

function TableCell361() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[551.78px] top-0 w-[104.1px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.78px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">4</p>
    </div>
  );
}

function TableCell362() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[655.88px] top-0 w-[104.1px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.77px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">4</p>
    </div>
  );
}

function TableCell363() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[759.98px] top-0 w-[104.1px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.78px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">1</p>
    </div>
  );
}

function TableCell364() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[864.08px] top-0 w-[102.613px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.03px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">5</p>
    </div>
  );
}

function TableCell365() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[966.69px] top-0 w-[102.113px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[51.77px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">4</p>
    </div>
  );
}

function TableRow35() {
  return (
    <div className="absolute bg-[#f9fafb] h-[44.8px] left-0 top-[126px] w-[1068.8px]" data-name="Table Row">
      <TableCell357 />
      <TableCell358 />
      <TableCell359 />
      <TableCell360 />
      <TableCell361 />
      <TableCell362 />
      <TableCell363 />
      <TableCell364 />
      <TableCell365 />
    </div>
  );
}

function TableCell366() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-0 top-0 w-[221.387px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[24px] not-italic text-[#101828] text-[14px] top-[12.2px]">No of A+ grades</p>
    </div>
  );
}

function TableCell367() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[221.39px] top-0 w-[102.287px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[51.86px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">2</p>
    </div>
  );
}

function TableCell368() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[323.67px] top-0 w-[115.975px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[58.71px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">3</p>
    </div>
  );
}

function TableCell369() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[439.65px] top-0 w-[112.125px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[56.79px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">2</p>
    </div>
  );
}

function TableCell370() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[551.78px] top-0 w-[104.1px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.78px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">1</p>
    </div>
  );
}

function TableCell371() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[655.88px] top-0 w-[104.1px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.77px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">2</p>
    </div>
  );
}

function TableCell372() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[759.98px] top-0 w-[104.1px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.78px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">2</p>
    </div>
  );
}

function TableCell373() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[864.08px] top-0 w-[102.613px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.03px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">5</p>
    </div>
  );
}

function TableCell374() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[966.69px] top-0 w-[102.113px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[51.77px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">5</p>
    </div>
  );
}

function TableRow36() {
  return (
    <div className="absolute bg-white h-[44.8px] left-0 top-[170.8px] w-[1068.8px]" data-name="Table Row">
      <TableCell366 />
      <TableCell367 />
      <TableCell368 />
      <TableCell369 />
      <TableCell370 />
      <TableCell371 />
      <TableCell372 />
      <TableCell373 />
      <TableCell374 />
    </div>
  );
}

function TableCell375() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-0 top-0 w-[221.387px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[24px] not-italic text-[#101828] text-[14px] top-[12.2px]">No of A grades</p>
    </div>
  );
}

function TableCell376() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[221.39px] top-0 w-[102.287px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[51.86px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">1</p>
    </div>
  );
}

function TableCell377() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[323.67px] top-0 w-[115.975px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[58.71px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">4</p>
    </div>
  );
}

function TableCell378() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[439.65px] top-0 w-[112.125px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[56.79px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">3</p>
    </div>
  );
}

function TableCell379() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[551.78px] top-0 w-[104.1px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.78px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">2</p>
    </div>
  );
}

function TableCell380() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[655.88px] top-0 w-[104.1px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.77px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">0</p>
    </div>
  );
}

function TableCell381() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[759.98px] top-0 w-[104.1px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.78px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">4</p>
    </div>
  );
}

function TableCell382() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[864.08px] top-0 w-[102.613px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[51.75px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">16</p>
    </div>
  );
}

function TableCell383() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[966.69px] top-0 w-[102.113px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[51.77px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">4</p>
    </div>
  );
}

function TableRow37() {
  return (
    <div className="absolute bg-[#f9fafb] h-[44.8px] left-0 top-[215.6px] w-[1068.8px]" data-name="Table Row">
      <TableCell375 />
      <TableCell376 />
      <TableCell377 />
      <TableCell378 />
      <TableCell379 />
      <TableCell380 />
      <TableCell381 />
      <TableCell382 />
      <TableCell383 />
    </div>
  );
}

function TableCell384() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-0 top-0 w-[221.387px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[24px] not-italic text-[#101828] text-[14px] top-[12.2px]">No of B+ grades</p>
    </div>
  );
}

function TableCell385() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[221.39px] top-0 w-[102.287px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[51.86px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">4</p>
    </div>
  );
}

function TableCell386() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[323.67px] top-0 w-[115.975px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[58.71px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">3</p>
    </div>
  );
}

function TableCell387() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[439.65px] top-0 w-[112.125px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[56.79px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">4</p>
    </div>
  );
}

function TableCell388() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[551.78px] top-0 w-[104.1px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.78px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">1</p>
    </div>
  );
}

function TableCell389() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[655.88px] top-0 w-[104.1px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.77px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">3</p>
    </div>
  );
}

function TableCell390() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[759.98px] top-0 w-[104.1px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.78px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">0</p>
    </div>
  );
}

function TableCell391() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[864.08px] top-0 w-[102.613px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[51.75px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">10</p>
    </div>
  );
}

function TableCell392() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[966.69px] top-0 w-[102.113px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[51.77px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">5</p>
    </div>
  );
}

function TableRow38() {
  return (
    <div className="absolute bg-white h-[44.8px] left-0 top-[260.4px] w-[1068.8px]" data-name="Table Row">
      <TableCell384 />
      <TableCell385 />
      <TableCell386 />
      <TableCell387 />
      <TableCell388 />
      <TableCell389 />
      <TableCell390 />
      <TableCell391 />
      <TableCell392 />
    </div>
  );
}

function TableCell393() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-0 top-0 w-[221.387px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[24px] not-italic text-[#101828] text-[14px] top-[12.2px]">No of B grades</p>
    </div>
  );
}

function TableCell394() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[221.39px] top-0 w-[102.287px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[51.86px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">4</p>
    </div>
  );
}

function TableCell395() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[323.67px] top-0 w-[115.975px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[58.71px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">0</p>
    </div>
  );
}

function TableCell396() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[439.65px] top-0 w-[112.125px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[56.79px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">3</p>
    </div>
  );
}

function TableCell397() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[551.78px] top-0 w-[104.1px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.78px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">2</p>
    </div>
  );
}

function TableCell398() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[655.88px] top-0 w-[104.1px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.77px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">2</p>
    </div>
  );
}

function TableCell399() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[759.98px] top-0 w-[104.1px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.78px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">0</p>
    </div>
  );
}

function TableCell400() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[864.08px] top-0 w-[102.613px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.03px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">0</p>
    </div>
  );
}

function TableCell401() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[966.69px] top-0 w-[102.113px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[51.77px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">5</p>
    </div>
  );
}

function TableRow39() {
  return (
    <div className="absolute bg-[#f9fafb] h-[44.8px] left-0 top-[305.2px] w-[1068.8px]" data-name="Table Row">
      <TableCell393 />
      <TableCell394 />
      <TableCell395 />
      <TableCell396 />
      <TableCell397 />
      <TableCell398 />
      <TableCell399 />
      <TableCell400 />
      <TableCell401 />
    </div>
  );
}

function TableCell402() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-0 top-0 w-[221.387px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[24px] not-italic text-[#101828] text-[14px] top-[12.2px]">No of C+ grades</p>
    </div>
  );
}

function TableCell403() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[221.39px] top-0 w-[102.287px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[51.86px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">5</p>
    </div>
  );
}

function TableCell404() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[323.67px] top-0 w-[115.975px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[58.71px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">0</p>
    </div>
  );
}

function TableCell405() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[439.65px] top-0 w-[112.125px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[56.79px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">1</p>
    </div>
  );
}

function TableCell406() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[551.78px] top-0 w-[104.1px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.78px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">5</p>
    </div>
  );
}

function TableCell407() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[655.88px] top-0 w-[104.1px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.77px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">3</p>
    </div>
  );
}

function TableCell408() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[759.98px] top-0 w-[104.1px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.78px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">1</p>
    </div>
  );
}

function TableCell409() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[864.08px] top-0 w-[102.613px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.03px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">1</p>
    </div>
  );
}

function TableCell410() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[966.69px] top-0 w-[102.113px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[51.77px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">3</p>
    </div>
  );
}

function TableRow40() {
  return (
    <div className="absolute bg-white h-[44.8px] left-0 top-[350px] w-[1068.8px]" data-name="Table Row">
      <TableCell402 />
      <TableCell403 />
      <TableCell404 />
      <TableCell405 />
      <TableCell406 />
      <TableCell407 />
      <TableCell408 />
      <TableCell409 />
      <TableCell410 />
    </div>
  );
}

function TableCell411() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-0 top-0 w-[221.387px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[24px] not-italic text-[#101828] text-[14px] top-[12.2px]">No of C grades</p>
    </div>
  );
}

function TableCell412() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[221.39px] top-0 w-[102.287px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[51.59px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">11</p>
    </div>
  );
}

function TableCell413() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[323.67px] top-0 w-[115.975px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[58.71px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">0</p>
    </div>
  );
}

function TableCell414() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[439.65px] top-0 w-[112.125px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[56.79px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">3</p>
    </div>
  );
}

function TableCell415() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[551.78px] top-0 w-[104.1px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.78px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">5</p>
    </div>
  );
}

function TableCell416() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[655.88px] top-0 w-[104.1px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.27px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">7</p>
    </div>
  );
}

function TableCell417() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[759.98px] top-0 w-[104.1px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.78px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">6</p>
    </div>
  );
}

function TableCell418() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[864.08px] top-0 w-[102.613px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.03px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">1</p>
    </div>
  );
}

function TableCell419() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[966.69px] top-0 w-[102.113px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[51.77px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">1</p>
    </div>
  );
}

function TableRow41() {
  return (
    <div className="absolute bg-[#f9fafb] h-[44.8px] left-0 top-[394.8px] w-[1068.8px]" data-name="Table Row">
      <TableCell411 />
      <TableCell412 />
      <TableCell413 />
      <TableCell414 />
      <TableCell415 />
      <TableCell416 />
      <TableCell417 />
      <TableCell418 />
      <TableCell419 />
    </div>
  );
}

function TableCell420() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-0 top-0 w-[221.387px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[24px] not-italic text-[#101828] text-[14px] top-[12.2px]">No of D grades</p>
    </div>
  );
}

function TableCell421() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[221.39px] top-0 w-[102.287px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[51.86px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">3</p>
    </div>
  );
}

function TableCell422() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[323.67px] top-0 w-[115.975px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[58.71px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">0</p>
    </div>
  );
}

function TableCell423() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[439.65px] top-0 w-[112.125px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[56.79px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">2</p>
    </div>
  );
}

function TableCell424() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[551.78px] top-0 w-[104.1px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.78px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">3</p>
    </div>
  );
}

function TableCell425() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[655.88px] top-0 w-[104.1px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.77px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">4</p>
    </div>
  );
}

function TableCell426() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[759.98px] top-0 w-[104.1px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.78px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">5</p>
    </div>
  );
}

function TableCell427() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[864.08px] top-0 w-[102.613px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.03px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">0</p>
    </div>
  );
}

function TableCell428() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[966.69px] top-0 w-[102.113px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[51.77px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">9</p>
    </div>
  );
}

function TableRow42() {
  return (
    <div className="absolute bg-white h-[44.8px] left-0 top-[439.6px] w-[1068.8px]" data-name="Table Row">
      <TableCell420 />
      <TableCell421 />
      <TableCell422 />
      <TableCell423 />
      <TableCell424 />
      <TableCell425 />
      <TableCell426 />
      <TableCell427 />
      <TableCell428 />
    </div>
  );
}

function TableCell429() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-0 top-0 w-[221.387px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[24px] not-italic text-[#101828] text-[14px] top-[12.2px]">No of P grades</p>
    </div>
  );
}

function TableCell430() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[221.39px] top-0 w-[102.287px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[51.86px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">1</p>
    </div>
  );
}

function TableCell431() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[323.67px] top-0 w-[115.975px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[58.71px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">0</p>
    </div>
  );
}

function TableCell432() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[439.65px] top-0 w-[112.125px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[56.79px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">2</p>
    </div>
  );
}

function TableCell433() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[551.78px] top-0 w-[104.1px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.78px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">5</p>
    </div>
  );
}

function TableCell434() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[655.88px] top-0 w-[104.1px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.77px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">4</p>
    </div>
  );
}

function TableCell435() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[759.98px] top-0 w-[104.1px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.78px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">9</p>
    </div>
  );
}

function TableCell436() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[864.08px] top-0 w-[102.613px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.03px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">0</p>
    </div>
  );
}

function TableCell437() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[966.69px] top-0 w-[102.113px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[51.77px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">1</p>
    </div>
  );
}

function TableRow43() {
  return (
    <div className="absolute bg-[#f9fafb] h-[44.8px] left-0 top-[484.4px] w-[1068.8px]" data-name="Table Row">
      <TableCell429 />
      <TableCell430 />
      <TableCell431 />
      <TableCell432 />
      <TableCell433 />
      <TableCell434 />
      <TableCell435 />
      <TableCell436 />
      <TableCell437 />
    </div>
  );
}

function TableCell438() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-0 top-0 w-[221.387px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[24px] not-italic text-[#101828] text-[14px] top-[12.2px]">No of F grades</p>
    </div>
  );
}

function TableCell439() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[221.39px] top-0 w-[102.287px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[51.86px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">5</p>
    </div>
  );
}

function TableCell440() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[323.67px] top-0 w-[115.975px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[58.71px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">0</p>
    </div>
  );
}

function TableCell441() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[439.65px] top-0 w-[112.125px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[56.51px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">11</p>
    </div>
  );
}

function TableCell442() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[551.78px] top-0 w-[104.1px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.5px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">10</p>
    </div>
  );
}

function TableCell443() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[655.88px] top-0 w-[104.1px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.77px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">9</p>
    </div>
  );
}

function TableCell444() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[759.98px] top-0 w-[104.1px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.5px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">10</p>
    </div>
  );
}

function TableCell445() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[864.08px] top-0 w-[102.613px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.03px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">0</p>
    </div>
  );
}

function TableCell446() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[966.69px] top-0 w-[102.113px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[51.77px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">1</p>
    </div>
  );
}

function TableRow44() {
  return (
    <div className="absolute bg-white h-[44.8px] left-0 top-[529.2px] w-[1068.8px]" data-name="Table Row">
      <TableCell438 />
      <TableCell439 />
      <TableCell440 />
      <TableCell441 />
      <TableCell442 />
      <TableCell443 />
      <TableCell444 />
      <TableCell445 />
      <TableCell446 />
    </div>
  );
}

function TableCell447() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-0 top-0 w-[221.387px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[24px] not-italic text-[#101828] text-[14px] top-[12.2px]">No of FE grades</p>
    </div>
  );
}

function TableCell448() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[221.39px] top-0 w-[102.287px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[51.86px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">0</p>
    </div>
  );
}

function TableCell449() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[323.67px] top-0 w-[115.975px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[58.71px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">0</p>
    </div>
  );
}

function TableCell450() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[439.65px] top-0 w-[112.125px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[56.79px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">0</p>
    </div>
  );
}

function TableCell451() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[551.78px] top-0 w-[104.1px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.78px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">0</p>
    </div>
  );
}

function TableCell452() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[655.88px] top-0 w-[104.1px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.77px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">0</p>
    </div>
  );
}

function TableCell453() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[759.98px] top-0 w-[104.1px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.78px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">0</p>
    </div>
  );
}

function TableCell454() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[864.08px] top-0 w-[102.613px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[52.03px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">0</p>
    </div>
  );
}

function TableCell455() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[966.69px] top-0 w-[102.113px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[51.77px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">0</p>
    </div>
  );
}

function TableRow45() {
  return (
    <div className="absolute bg-[#f9fafb] h-[44.8px] left-0 top-[574px] w-[1068.8px]" data-name="Table Row">
      <TableCell447 />
      <TableCell448 />
      <TableCell449 />
      <TableCell450 />
      <TableCell451 />
      <TableCell452 />
      <TableCell453 />
      <TableCell454 />
      <TableCell455 />
    </div>
  );
}

function TableBody1() {
  return (
    <div className="absolute bg-white h-[618.8px] left-0 top-[40px] w-[1068.8px]" data-name="Table Body">
      <TableRow32 />
      <TableRow33 />
      <TableRow34 />
      <TableRow35 />
      <TableRow36 />
      <TableRow37 />
      <TableRow38 />
      <TableRow39 />
      <TableRow40 />
      <TableRow41 />
      <TableRow42 />
      <TableRow43 />
      <TableRow44 />
      <TableRow45 />
    </div>
  );
}

function Table1() {
  return (
    <div className="h-[659.2px] relative shrink-0 w-full" data-name="Table">
      <TableHeader1 />
      <TableBody1 />
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[660.8px] relative rounded-[10px] shrink-0 w-[1070.4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[0.8px] relative rounded-[inherit] size-full">
        <Table1 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function TableCell456() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.4px] left-0 top-0 w-[860.313px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[24px] not-italic text-[#101828] text-[14px] top-[11.8px]">Total Students (REGULAR)</p>
    </div>
  );
}

function TableCell457() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.4px] left-[860.31px] top-0 w-[208.488px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[104.69px] not-italic text-[#101828] text-[14px] text-center top-[11.8px]">38</p>
    </div>
  );
}

function TableRow46() {
  return (
    <div className="absolute bg-[#eff6ff] h-[44.4px] left-0 top-0 w-[1068.8px]" data-name="Table Row">
      <TableCell456 />
      <TableCell457 />
    </div>
  );
}

function TableCell458() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-0 top-0 w-[860.313px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[24px] not-italic text-[#101828] text-[14px] top-[12.2px]">Total Failed (REGULAR) (students having one or more arrears)</p>
    </div>
  );
}

function TableCell459() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[860.31px] top-0 w-[208.488px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[104.69px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">16</p>
    </div>
  );
}

function TableRow47() {
  return (
    <div className="absolute bg-white h-[44.8px] left-0 top-[44.4px] w-[1068.8px]" data-name="Table Row">
      <TableCell458 />
      <TableCell459 />
    </div>
  );
}

function TableCell460() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-0 top-0 w-[860.313px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[24px] not-italic text-[#101828] text-[14px] top-[12.2px]">Total Passed (REGULAR) (students having no arrears)</p>
    </div>
  );
}

function TableCell461() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[860.31px] top-0 w-[208.488px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[104.19px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">22</p>
    </div>
  );
}

function TableRow48() {
  return (
    <div className="absolute bg-[#f9fafb] h-[44.8px] left-0 top-[89.2px] w-[1068.8px]" data-name="Table Row">
      <TableCell460 />
      <TableCell461 />
    </div>
  );
}

function TableCell462() {
  return (
    <div className="absolute h-[52.4px] left-0 top-0 w-[860.313px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[24px] not-italic text-[#101828] text-[14px] top-[16.2px]">Pass Percentage (REGULAR)</p>
    </div>
  );
}

function TableCell463() {
  return (
    <div className="absolute h-[52.4px] left-[860.31px] top-0 w-[208.488px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-[104.79px] not-italic text-[#096] text-[18px] text-center top-[11px]">57.89%</p>
    </div>
  );
}

function TableRow49() {
  return (
    <div className="absolute bg-[#ecfdf5] h-[52.4px] left-0 top-[134px] w-[1068.8px]" data-name="Table Row">
      <TableCell462 />
      <TableCell463 />
    </div>
  );
}

function TableBody2() {
  return (
    <div className="absolute bg-white h-[186.4px] left-0 top-0 w-[1068.8px]" data-name="Table Body">
      <TableRow46 />
      <TableRow47 />
      <TableRow48 />
      <TableRow49 />
    </div>
  );
}

function Table2() {
  return (
    <div className="h-[186.4px] relative shrink-0 w-full" data-name="Table">
      <TableBody2 />
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[188px] relative rounded-[10px] shrink-0 w-[1070.4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[0.8px] relative rounded-[inherit] size-full">
        <Table2 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-white h-[1022.4px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start pb-[0.8px] pl-[16.8px] pr-[0.8px] pt-[16.8px] relative size-full">
          <Heading4 />
          <Container46 />
          <Container47 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[28px] relative shrink-0 w-[1070.4px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-[-1.4px]">Subject wise analysis</p>
      </div>
    </div>
  );
}

function HeaderCell20() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.2)] border-r-[0.8px] border-solid h-[40px] left-0 top-0 w-[126.412px]" data-name="Header Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[62.74px] not-italic text-[14px] text-center text-white top-[9.8px]">SubCode</p>
    </div>
  );
}

function HeaderCell21() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.2)] border-r-[0.8px] border-solid h-[40px] left-[126.41px] top-0 w-[100.55px]" data-name="Header Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[50.21px] not-italic text-[14px] text-center text-white top-[9.8px]">Pass %</p>
    </div>
  );
}

function HeaderCell22() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.2)] border-r-[0.8px] border-solid h-[40px] left-[226.96px] top-0 w-[77.2px]" data-name="Header Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[39.04px] not-italic text-[14px] text-center text-white top-[9.8px]">Pass</p>
    </div>
  );
}

function HeaderCell23() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.2)] border-r-[0.8px] border-solid h-[40px] left-[304.16px] top-0 w-[68.813px]" data-name="Header Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[34.23px] not-italic text-[14px] text-center text-white top-[9.8px]">Fail</p>
    </div>
  );
}

function HeaderCell24() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.2)] border-r-[0.8px] border-solid h-[40px] left-[372.98px] top-0 w-[57.713px]" data-name="Header Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[28.92px] not-italic text-[14px] text-center text-white top-[9.8px]">S</p>
    </div>
  );
}

function HeaderCell25() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.2)] border-r-[0.8px] border-solid h-[40px] left-[430.69px] top-0 w-[65px]" data-name="Header Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[32.63px] not-italic text-[14px] text-center text-white top-[9.8px]">A+</p>
    </div>
  );
}

function HeaderCell26() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.2)] border-r-[0.8px] border-solid h-[40px] left-[495.69px] top-0 w-[68.725px]" data-name="Header Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[34.94px] not-italic text-[14px] text-center text-white top-[9.8px]">A</p>
    </div>
  );
}

function HeaderCell27() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.2)] border-r-[0.8px] border-solid h-[40px] left-[564.41px] top-0 w-[68.725px]" data-name="Header Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[34.42px] not-italic text-[14px] text-center text-white top-[9.8px]">B+</p>
    </div>
  );
}

function HeaderCell28() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.2)] border-r-[0.8px] border-solid h-[40px] left-[633.14px] top-0 w-[57.713px]" data-name="Header Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[28.36px] not-italic text-[14px] text-center text-white top-[9.8px]">B</p>
    </div>
  );
}

function HeaderCell29() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.2)] border-r-[0.8px] border-solid h-[40px] left-[690.85px] top-0 w-[63.375px]" data-name="Header Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[31.86px] not-italic text-[14px] text-center text-white top-[9.8px]">C+</p>
    </div>
  );
}

function HeaderCell30() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.2)] border-r-[0.8px] border-solid h-[40px] left-[754.23px] top-0 w-[57.713px]" data-name="Header Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[28.99px] not-italic text-[14px] text-center text-white top-[9.8px]">C</p>
    </div>
  );
}

function HeaderCell31() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.2)] border-r-[0.8px] border-solid h-[40px] left-[811.94px] top-0 w-[57.713px]" data-name="Header Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[29.19px] not-italic text-[14px] text-center text-white top-[9.8px]">D</p>
    </div>
  );
}

function HeaderCell32() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.2)] border-r-[0.8px] border-solid h-[40px] left-[869.65px] top-0 w-[57.713px]" data-name="Header Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[28.55px] not-italic text-[14px] text-center text-white top-[9.8px]">P</p>
    </div>
  );
}

function HeaderCell33() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.2)] border-r-[0.8px] border-solid h-[40px] left-[927.36px] top-0 w-[68.725px]" data-name="Header Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[35.21px] not-italic text-[14px] text-center text-white top-[9.8px]">F</p>
    </div>
  );
}

function HeaderCell34() {
  return (
    <div className="absolute h-[40px] left-[996.09px] top-0 w-[72.713px]" data-name="Header Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[37.36px] not-italic text-[14px] text-center text-white top-[9.8px]">FE/I</p>
    </div>
  );
}

function TableRow50() {
  return (
    <div className="absolute bg-gradient-to-r from-[#155dfc] h-[40px] left-0 to-[#009689] top-0 w-[1068.8px]" data-name="Table Row">
      <HeaderCell20 />
      <HeaderCell21 />
      <HeaderCell22 />
      <HeaderCell23 />
      <HeaderCell24 />
      <HeaderCell25 />
      <HeaderCell26 />
      <HeaderCell27 />
      <HeaderCell28 />
      <HeaderCell29 />
      <HeaderCell30 />
      <HeaderCell31 />
      <HeaderCell32 />
      <HeaderCell33 />
      <HeaderCell34 />
    </div>
  );
}

function TableHeader2() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[1068.8px]" data-name="Table Header">
      <TableRow50 />
    </div>
  );
}

function TableCell464() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[40.4px] left-0 top-0 w-[126.412px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[63.37px] not-italic text-[#101828] text-[14px] text-center top-[9.8px]">EST200</p>
    </div>
  );
}

function TableCell465() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[40.4px] left-[126.41px] top-0 w-[100.55px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[49.86px] not-italic text-[#096] text-[14px] text-center top-[9.8px]">86.84</p>
    </div>
  );
}

function TableCell466() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[40.4px] left-[226.96px] top-0 w-[77.2px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[39.05px] not-italic text-[#101828] text-[14px] text-center top-[9.8px]">33</p>
    </div>
  );
}

function TableCell467() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[40.4px] left-[304.16px] top-0 w-[68.813px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[35.13px] not-italic text-[#101828] text-[14px] text-center top-[9.8px]">5</p>
    </div>
  );
}

function TableCell468() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[40.4px] left-[372.98px] top-0 w-[57.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[29.57px] not-italic text-[#101828] text-[14px] text-center top-[9.8px]">2</p>
    </div>
  );
}

function TableCell469() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[40.4px] left-[430.69px] top-0 w-[65px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[33.23px] not-italic text-[#101828] text-[14px] text-center top-[9.8px]">2</p>
    </div>
  );
}

function TableCell470() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[40.4px] left-[495.69px] top-0 w-[68.725px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[35.09px] not-italic text-[#101828] text-[14px] text-center top-[9.8px]">1</p>
    </div>
  );
}

function TableCell471() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[40.4px] left-[564.41px] top-0 w-[68.725px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[35.09px] not-italic text-[#101828] text-[14px] text-center top-[9.8px]">4</p>
    </div>
  );
}

function TableCell472() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[40.4px] left-[633.14px] top-0 w-[57.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[29.58px] not-italic text-[#101828] text-[14px] text-center top-[9.8px]">4</p>
    </div>
  );
}

function TableCell473() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[40.4px] left-[690.85px] top-0 w-[63.375px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[32.41px] not-italic text-[#101828] text-[14px] text-center top-[9.8px]">5</p>
    </div>
  );
}

function TableCell474() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[40.4px] left-[754.23px] top-0 w-[57.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[29.3px] not-italic text-[#101828] text-[14px] text-center top-[9.8px]">11</p>
    </div>
  );
}

function TableCell475() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[40.4px] left-[811.94px] top-0 w-[57.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[29.57px] not-italic text-[#101828] text-[14px] text-center top-[9.8px]">3</p>
    </div>
  );
}

function TableCell476() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[40.4px] left-[869.65px] top-0 w-[57.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[29.58px] not-italic text-[#101828] text-[14px] text-center top-[9.8px]">1</p>
    </div>
  );
}

function TableCell477() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[40.4px] left-[927.36px] top-0 w-[68.725px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[35.09px] not-italic text-[#101828] text-[14px] text-center top-[9.8px]">5</p>
    </div>
  );
}

function TableCell478() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[40.4px] left-[996.09px] top-0 w-[72.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[37.08px] not-italic text-[#101828] text-[14px] text-center top-[9.8px]">0</p>
    </div>
  );
}

function TableRow51() {
  return (
    <div className="absolute bg-[#f9fafb] h-[40.4px] left-0 top-0 w-[1068.8px]" data-name="Table Row">
      <TableCell464 />
      <TableCell465 />
      <TableCell466 />
      <TableCell467 />
      <TableCell468 />
      <TableCell469 />
      <TableCell470 />
      <TableCell471 />
      <TableCell472 />
      <TableCell473 />
      <TableCell474 />
      <TableCell475 />
      <TableCell476 />
      <TableCell477 />
      <TableCell478 />
    </div>
  );
}

function TableCell479() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-0 top-0 w-[126.412px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[64.02px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">MCN201</p>
    </div>
  );
}

function TableCell480() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[126.41px] top-0 w-[100.55px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[50.79px] not-italic text-[#096] text-[14px] text-center top-[12.2px]">97.37</p>
    </div>
  );
}

function TableCell481() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[226.96px] top-0 w-[77.2px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[39.55px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">37</p>
    </div>
  );
}

function TableCell482() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[304.16px] top-0 w-[68.813px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[35.13px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">1</p>
    </div>
  );
}

function TableCell483() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[372.98px] top-0 w-[57.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[29.8px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">27</p>
    </div>
  );
}

function TableCell484() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[430.69px] top-0 w-[65px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[33.23px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">3</p>
    </div>
  );
}

function TableCell485() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[495.69px] top-0 w-[68.725px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[35.09px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">4</p>
    </div>
  );
}

function TableCell486() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[564.41px] top-0 w-[68.725px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[35.09px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">3</p>
    </div>
  );
}

function TableCell487() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[633.14px] top-0 w-[57.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[29.58px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">0</p>
    </div>
  );
}

function TableCell488() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[690.85px] top-0 w-[63.375px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[32.41px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">0</p>
    </div>
  );
}

function TableCell489() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[754.23px] top-0 w-[57.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[29.58px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">0</p>
    </div>
  );
}

function TableCell490() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[811.94px] top-0 w-[57.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[29.57px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">0</p>
    </div>
  );
}

function TableCell491() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[869.65px] top-0 w-[57.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[29.58px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">0</p>
    </div>
  );
}

function TableCell492() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[927.36px] top-0 w-[68.725px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[35.09px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">0</p>
    </div>
  );
}

function TableCell493() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[996.09px] top-0 w-[72.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[37.08px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">0</p>
    </div>
  );
}

function TableRow52() {
  return (
    <div className="absolute bg-white h-[44.8px] left-0 top-[40.4px] w-[1068.8px]" data-name="Table Row">
      <TableCell479 />
      <TableCell480 />
      <TableCell481 />
      <TableCell482 />
      <TableCell483 />
      <TableCell484 />
      <TableCell485 />
      <TableCell486 />
      <TableCell487 />
      <TableCell488 />
      <TableCell489 />
      <TableCell490 />
      <TableCell491 />
      <TableCell492 />
      <TableCell493 />
    </div>
  );
}

function TableCell494() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-0 top-0 w-[126.412px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[62.89px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">MAT203</p>
    </div>
  );
}

function TableCell495() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[126.41px] top-0 w-[100.55px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[50.74px] not-italic text-[#096] text-[14px] text-center top-[12.2px]">71.05</p>
    </div>
  );
}

function TableCell496() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[226.96px] top-0 w-[77.2px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[39.55px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">27</p>
    </div>
  );
}

function TableCell497() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[304.16px] top-0 w-[68.813px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[34.85px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">11</p>
    </div>
  );
}

function TableCell498() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[372.98px] top-0 w-[57.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[29.07px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">7</p>
    </div>
  );
}

function TableCell499() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[430.69px] top-0 w-[65px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[33.23px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">2</p>
    </div>
  );
}

function TableCell500() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[495.69px] top-0 w-[68.725px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[35.09px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">3</p>
    </div>
  );
}

function TableCell501() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[564.41px] top-0 w-[68.725px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[35.09px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">4</p>
    </div>
  );
}

function TableCell502() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[633.14px] top-0 w-[57.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[29.58px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">3</p>
    </div>
  );
}

function TableCell503() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[690.85px] top-0 w-[63.375px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[32.41px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">1</p>
    </div>
  );
}

function TableCell504() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[754.23px] top-0 w-[57.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[29.58px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">3</p>
    </div>
  );
}

function TableCell505() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[811.94px] top-0 w-[57.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[29.57px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">2</p>
    </div>
  );
}

function TableCell506() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[869.65px] top-0 w-[57.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[29.58px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">2</p>
    </div>
  );
}

function TableCell507() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[927.36px] top-0 w-[68.725px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[34.81px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">11</p>
    </div>
  );
}

function TableCell508() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[996.09px] top-0 w-[72.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[37.08px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">0</p>
    </div>
  );
}

function TableRow53() {
  return (
    <div className="absolute bg-[#f9fafb] h-[44.8px] left-0 top-[85.2px] w-[1068.8px]" data-name="Table Row">
      <TableCell494 />
      <TableCell495 />
      <TableCell496 />
      <TableCell497 />
      <TableCell498 />
      <TableCell499 />
      <TableCell500 />
      <TableCell501 />
      <TableCell502 />
      <TableCell503 />
      <TableCell504 />
      <TableCell505 />
      <TableCell506 />
      <TableCell507 />
      <TableCell508 />
    </div>
  );
}

function TableCell509() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-0 top-0 w-[126.412px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[63.23px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">CST201</p>
    </div>
  );
}

function TableCell510() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[126.41px] top-0 w-[100.55px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[50.65px] not-italic text-[#096] text-[14px] text-center top-[12.2px]">73.68</p>
    </div>
  );
}

function TableCell511() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[226.96px] top-0 w-[77.2px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[39.05px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">28</p>
    </div>
  );
}

function TableCell512() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[304.16px] top-0 w-[68.813px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[34.85px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">10</p>
    </div>
  );
}

function TableCell513() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[372.98px] top-0 w-[57.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[29.57px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">4</p>
    </div>
  );
}

function TableCell514() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[430.69px] top-0 w-[65px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[33.23px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">1</p>
    </div>
  );
}

function TableCell515() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[495.69px] top-0 w-[68.725px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[35.09px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">2</p>
    </div>
  );
}

function TableCell516() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[564.41px] top-0 w-[68.725px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[35.09px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">1</p>
    </div>
  );
}

function TableCell517() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[633.14px] top-0 w-[57.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[29.58px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">2</p>
    </div>
  );
}

function TableCell518() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[690.85px] top-0 w-[63.375px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[32.41px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">5</p>
    </div>
  );
}

function TableCell519() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[754.23px] top-0 w-[57.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[29.58px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">5</p>
    </div>
  );
}

function TableCell520() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[811.94px] top-0 w-[57.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[29.57px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">3</p>
    </div>
  );
}

function TableCell521() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[869.65px] top-0 w-[57.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[29.58px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">5</p>
    </div>
  );
}

function TableCell522() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[927.36px] top-0 w-[68.725px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[34.81px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">10</p>
    </div>
  );
}

function TableCell523() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[996.09px] top-0 w-[72.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[37.08px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">0</p>
    </div>
  );
}

function TableRow54() {
  return (
    <div className="absolute bg-white h-[44.8px] left-0 top-[130px] w-[1068.8px]" data-name="Table Row">
      <TableCell509 />
      <TableCell510 />
      <TableCell511 />
      <TableCell512 />
      <TableCell513 />
      <TableCell514 />
      <TableCell515 />
      <TableCell516 />
      <TableCell517 />
      <TableCell518 />
      <TableCell519 />
      <TableCell520 />
      <TableCell521 />
      <TableCell522 />
      <TableCell523 />
    </div>
  );
}

function TableCell524() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-0 top-0 w-[126.412px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[63.23px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">CST203</p>
    </div>
  );
}

function TableCell525() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[126.41px] top-0 w-[100.55px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[50.65px] not-italic text-[#096] text-[14px] text-center top-[12.2px]">76.32</p>
    </div>
  );
}

function TableCell526() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[226.96px] top-0 w-[77.2px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[39.05px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">29</p>
    </div>
  );
}

function TableCell527() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[304.16px] top-0 w-[68.813px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[35.13px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">9</p>
    </div>
  );
}

function TableCell528() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[372.98px] top-0 w-[57.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[29.57px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">4</p>
    </div>
  );
}

function TableCell529() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[430.69px] top-0 w-[65px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[33.23px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">2</p>
    </div>
  );
}

function TableCell530() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[495.69px] top-0 w-[68.725px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[35.09px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">0</p>
    </div>
  );
}

function TableCell531() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[564.41px] top-0 w-[68.725px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[35.09px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">3</p>
    </div>
  );
}

function TableCell532() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[633.14px] top-0 w-[57.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[29.58px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">2</p>
    </div>
  );
}

function TableCell533() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[690.85px] top-0 w-[63.375px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[32.41px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">3</p>
    </div>
  );
}

function TableCell534() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[754.23px] top-0 w-[57.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[29.08px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">7</p>
    </div>
  );
}

function TableCell535() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[811.94px] top-0 w-[57.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[29.57px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">4</p>
    </div>
  );
}

function TableCell536() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[869.65px] top-0 w-[57.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[29.58px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">4</p>
    </div>
  );
}

function TableCell537() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[927.36px] top-0 w-[68.725px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[35.09px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">9</p>
    </div>
  );
}

function TableCell538() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[996.09px] top-0 w-[72.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[37.08px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">0</p>
    </div>
  );
}

function TableRow55() {
  return (
    <div className="absolute bg-[#f9fafb] h-[44.8px] left-0 top-[174.8px] w-[1068.8px]" data-name="Table Row">
      <TableCell524 />
      <TableCell525 />
      <TableCell526 />
      <TableCell527 />
      <TableCell528 />
      <TableCell529 />
      <TableCell530 />
      <TableCell531 />
      <TableCell532 />
      <TableCell533 />
      <TableCell534 />
      <TableCell535 />
      <TableCell536 />
      <TableCell537 />
      <TableCell538 />
    </div>
  );
}

function TableCell539() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-0 top-0 w-[126.412px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[63.23px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">CST205</p>
    </div>
  );
}

function TableCell540() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[126.41px] top-0 w-[100.55px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[50.65px] not-italic text-[#096] text-[14px] text-center top-[12.2px]">73.68</p>
    </div>
  );
}

function TableCell541() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[226.96px] top-0 w-[77.2px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[39.05px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">28</p>
    </div>
  );
}

function TableCell542() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[304.16px] top-0 w-[68.813px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[34.85px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">10</p>
    </div>
  );
}

function TableCell543() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[372.98px] top-0 w-[57.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[29.57px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">1</p>
    </div>
  );
}

function TableCell544() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[430.69px] top-0 w-[65px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[33.23px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">2</p>
    </div>
  );
}

function TableCell545() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[495.69px] top-0 w-[68.725px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[35.09px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">4</p>
    </div>
  );
}

function TableCell546() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[564.41px] top-0 w-[68.725px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[35.09px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">0</p>
    </div>
  );
}

function TableCell547() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[633.14px] top-0 w-[57.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[29.58px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">0</p>
    </div>
  );
}

function TableCell548() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[690.85px] top-0 w-[63.375px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[32.41px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">1</p>
    </div>
  );
}

function TableCell549() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[754.23px] top-0 w-[57.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[29.58px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">6</p>
    </div>
  );
}

function TableCell550() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[811.94px] top-0 w-[57.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[29.57px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">5</p>
    </div>
  );
}

function TableCell551() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[869.65px] top-0 w-[57.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[29.58px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">9</p>
    </div>
  );
}

function TableCell552() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[927.36px] top-0 w-[68.725px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[34.81px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">10</p>
    </div>
  );
}

function TableCell553() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[996.09px] top-0 w-[72.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[37.08px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">0</p>
    </div>
  );
}

function TableRow56() {
  return (
    <div className="absolute bg-white h-[44.8px] left-0 top-[219.6px] w-[1068.8px]" data-name="Table Row">
      <TableCell539 />
      <TableCell540 />
      <TableCell541 />
      <TableCell542 />
      <TableCell543 />
      <TableCell544 />
      <TableCell545 />
      <TableCell546 />
      <TableCell547 />
      <TableCell548 />
      <TableCell549 />
      <TableCell550 />
      <TableCell551 />
      <TableCell552 />
      <TableCell553 />
    </div>
  );
}

function TableCell554() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-0 top-0 w-[126.412px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[63.75px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">CSL201</p>
    </div>
  );
}

function TableCell555() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[126.41px] top-0 w-[100.55px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[50.68px] not-italic text-[#096] text-[14px] text-center top-[12.2px]">100</p>
    </div>
  );
}

function TableCell556() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[226.96px] top-0 w-[77.2px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[39.05px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">38</p>
    </div>
  );
}

function TableCell557() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[304.16px] top-0 w-[68.813px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[35.13px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">0</p>
    </div>
  );
}

function TableCell558() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[372.98px] top-0 w-[57.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[29.57px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">5</p>
    </div>
  );
}

function TableCell559() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[430.69px] top-0 w-[65px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[33.23px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">5</p>
    </div>
  );
}

function TableCell560() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[495.69px] top-0 w-[68.725px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[34.81px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">16</p>
    </div>
  );
}

function TableCell561() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[564.41px] top-0 w-[68.725px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[34.81px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">10</p>
    </div>
  );
}

function TableCell562() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[633.14px] top-0 w-[57.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[29.58px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">0</p>
    </div>
  );
}

function TableCell563() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[690.85px] top-0 w-[63.375px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[32.41px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">1</p>
    </div>
  );
}

function TableCell564() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[754.23px] top-0 w-[57.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[29.58px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">1</p>
    </div>
  );
}

function TableCell565() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[811.94px] top-0 w-[57.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[29.57px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">0</p>
    </div>
  );
}

function TableCell566() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[869.65px] top-0 w-[57.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[29.58px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">0</p>
    </div>
  );
}

function TableCell567() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[927.36px] top-0 w-[68.725px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[35.09px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">0</p>
    </div>
  );
}

function TableCell568() {
  return (
    <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[44.8px] left-[996.09px] top-0 w-[72.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[37.08px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">0</p>
    </div>
  );
}

function TableRow57() {
  return (
    <div className="absolute bg-[#f9fafb] h-[44.8px] left-0 top-[264.4px] w-[1068.8px]" data-name="Table Row">
      <TableCell554 />
      <TableCell555 />
      <TableCell556 />
      <TableCell557 />
      <TableCell558 />
      <TableCell559 />
      <TableCell560 />
      <TableCell561 />
      <TableCell562 />
      <TableCell563 />
      <TableCell564 />
      <TableCell565 />
      <TableCell566 />
      <TableCell567 />
      <TableCell568 />
    </div>
  );
}

function TableCell569() {
  return (
    <div className="absolute h-[44.4px] left-0 top-0 w-[126.412px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[63.25px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">CSL203</p>
    </div>
  );
}

function TableCell570() {
  return (
    <div className="absolute h-[44.4px] left-[126.41px] top-0 w-[100.55px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[50.79px] not-italic text-[#096] text-[14px] text-center top-[12.2px]">97.37</p>
    </div>
  );
}

function TableCell571() {
  return (
    <div className="absolute h-[44.4px] left-[226.96px] top-0 w-[77.2px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[39.55px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">37</p>
    </div>
  );
}

function TableCell572() {
  return (
    <div className="absolute h-[44.4px] left-[304.16px] top-0 w-[68.813px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[35.13px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">1</p>
    </div>
  );
}

function TableCell573() {
  return (
    <div className="absolute h-[44.4px] left-[372.98px] top-0 w-[57.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[29.57px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">4</p>
    </div>
  );
}

function TableCell574() {
  return (
    <div className="absolute h-[44.4px] left-[430.69px] top-0 w-[65px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[33.23px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">5</p>
    </div>
  );
}

function TableCell575() {
  return (
    <div className="absolute h-[44.4px] left-[495.69px] top-0 w-[68.725px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[35.09px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">4</p>
    </div>
  );
}

function TableCell576() {
  return (
    <div className="absolute h-[44.4px] left-[564.41px] top-0 w-[68.725px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[35.09px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">5</p>
    </div>
  );
}

function TableCell577() {
  return (
    <div className="absolute h-[44.4px] left-[633.14px] top-0 w-[57.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[29.58px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">5</p>
    </div>
  );
}

function TableCell578() {
  return (
    <div className="absolute h-[44.4px] left-[690.85px] top-0 w-[63.375px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[32.41px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">3</p>
    </div>
  );
}

function TableCell579() {
  return (
    <div className="absolute h-[44.4px] left-[754.23px] top-0 w-[57.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[29.58px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">1</p>
    </div>
  );
}

function TableCell580() {
  return (
    <div className="absolute h-[44.4px] left-[811.94px] top-0 w-[57.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[29.57px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">9</p>
    </div>
  );
}

function TableCell581() {
  return (
    <div className="absolute h-[44.4px] left-[869.65px] top-0 w-[57.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[29.58px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">1</p>
    </div>
  );
}

function TableCell582() {
  return (
    <div className="absolute h-[44.4px] left-[927.36px] top-0 w-[68.725px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[35.09px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">1</p>
    </div>
  );
}

function TableCell583() {
  return (
    <div className="absolute h-[44.4px] left-[996.09px] top-0 w-[72.713px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[37.08px] not-italic text-[#101828] text-[14px] text-center top-[12.2px]">0</p>
    </div>
  );
}

function TableRow58() {
  return (
    <div className="absolute bg-white h-[44.4px] left-0 top-[309.2px] w-[1068.8px]" data-name="Table Row">
      <TableCell569 />
      <TableCell570 />
      <TableCell571 />
      <TableCell572 />
      <TableCell573 />
      <TableCell574 />
      <TableCell575 />
      <TableCell576 />
      <TableCell577 />
      <TableCell578 />
      <TableCell579 />
      <TableCell580 />
      <TableCell581 />
      <TableCell582 />
      <TableCell583 />
    </div>
  );
}

function TableBody3() {
  return (
    <div className="absolute bg-white h-[353.6px] left-0 top-[40px] w-[1068.8px]" data-name="Table Body">
      <TableRow51 />
      <TableRow52 />
      <TableRow53 />
      <TableRow54 />
      <TableRow55 />
      <TableRow56 />
      <TableRow57 />
      <TableRow58 />
    </div>
  );
}

function Table3() {
  return (
    <div className="h-[393.6px] relative shrink-0 w-full" data-name="Table">
      <TableHeader2 />
      <TableBody3 />
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[395.2px] relative rounded-[10px] shrink-0 w-[1070.4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[0.8px] relative rounded-[inherit] size-full">
        <Table3 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container48() {
  return (
    <div className="bg-white h-[496.8px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start pb-[0.8px] pl-[16.8px] pr-[0.8px] pt-[16.8px] relative size-full">
          <Heading5 />
          <Container49 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[3591.188px] items-start left-0 top-0 w-[1104px]" data-name="Container">
      <Container7 />
      <Container18 />
      <Container34 />
      <Container45 />
      <Container48 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-[24px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1c432800} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-white border-[#bedbff] border-[0.8px] border-solid h-[41.6px] left-[473.76px] rounded-[10px] top-[3615.19px] w-[156.463px]" data-name="Button">
      <Icon12 />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[89.5px] not-italic text-[#364153] text-[16px] text-center top-[5.8px]">Back to top</p>
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute h-[3656.788px] left-[24px] top-[116.79px] w-[1104px]" data-name="Main Content">
      <Container6 />
      <Button4 />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[20px] relative shrink-0 w-[221.663px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[-0.2px]">© 2026 Engineering Result Analyzer</p>
      </div>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[20px] relative shrink-0 w-[373.9px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[-0.2px]">A tool for analyzing and visualizing engineering exam results</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">
          <Paragraph15 />
          <Paragraph16 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[52.8px] items-start left-0 pt-[16.8px] top-[3805.57px] w-[1152px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <Container50 />
    </div>
  );
}

function T() {
  return (
    <div className="absolute h-[727.2px] left-0 top-0 w-[1152px]" data-name="T0" style={{ backgroundImage: "linear-gradient(147.738deg, rgb(248, 250, 252) 0%, rgb(239, 246, 255) 50%, rgb(240, 253, 250) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p13ff8180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex h-[56px] items-center justify-center relative rounded-[16px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 105, 0) 0%, rgb(251, 44, 54) 100%)" }}>
      <Icon13 />
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[1064px] size-[56px] top-[726.4px]" data-name="Button">
      <Container51 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p13ff8180} id="Vector" stroke="var(--stroke-0, #FF6900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container55() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 size-[44px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[18px] text-white top-[-1.4px]">Report Issue</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.9)]">{`We're here to help`}</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[43.987px] relative shrink-0 w-[105.037px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading6 />
        <Paragraph17 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[44px] relative shrink-0 w-[161.038px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container55 />
        <Container56 />
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M15 5L5 15" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M5 5L15 15" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon15 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="bg-gradient-to-r from-[#ff6900] h-[76px] relative shrink-0 to-[#fb2c36] w-[400px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[20px] relative size-full">
        <Container54 />
        <Button6 />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[-0.2px]">Your Name</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-white h-[45.6px] relative rounded-[10px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[10px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#99a1af] text-[16px]">John Doe</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[73.6px] items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <TextInput />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[-0.2px]">Email Address</p>
    </div>
  );
}

function EmailInput() {
  return (
    <div className="bg-white h-[45.6px] relative rounded-[10px] shrink-0 w-full" data-name="Email Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[10px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#99a1af] text-[16px]">john@example.com</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[73.6px] items-start relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <EmailInput />
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[-0.2px]">Describe the Issue</p>
    </div>
  );
}

function TextArea() {
  return (
    <div className="bg-white h-[141.6px] relative rounded-[10px] shrink-0 w-full" data-name="Text Area">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[16px] py-[10px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#99a1af] text-[16px]">Please describe what happened...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[175.2px] items-start relative shrink-0 w-full" data-name="Container">
      <Label2 />
      <TextArea />
    </div>
  );
}

function Label3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[-0.2px]">Attach Screenshot/Video (Optional)</p>
    </div>
  );
}

function Icon16() {
  return (
    <div className="absolute left-[16px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p23ad1400} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26e09a00} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 2V10" id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[36px] left-[108.64px] rounded-[10px] top-[25.6px] w-[134.713px]" data-name="Button">
      <Icon16 />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[79px] not-italic text-[#364153] text-[14px] text-center top-[7.8px]">Choose Files</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="absolute content-stretch flex h-[15.988px] items-start left-[25.6px] top-[69.6px] w-[300.8px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px] text-center whitespace-pre-wrap">Max 10MB per file</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="bg-white h-[111.188px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Button7 />
      <Paragraph18 />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[139.188px] items-start relative shrink-0 w-full" data-name="Container">
      <Label3 />
      <Container62 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="absolute left-[109.19px] size-[20px] top-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2fb21d20} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-gradient-to-r from-[#ff6900] h-[48px] relative rounded-[10px] shadow-[0px_10px_15px_0px_rgba(255,105,0,0.2),0px_4px_6px_0px_rgba(255,105,0,0.2)] shrink-0 to-[#fb2c36] w-full" data-name="Button">
      <Icon17 />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[190.19px] not-italic text-[16px] text-center text-white top-[9.8px]">Submit Report</p>
    </div>
  );
}

function Form() {
  return (
    <div className="h-[637.588px] relative shrink-0 w-full" data-name="Form">
      <div className="content-stretch flex flex-col gap-[20px] items-start pt-[24px] px-[24px] relative size-full">
        <Container58 />
        <Container59 />
        <Container60 />
        <Container61 />
        <Button8 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="bg-[#f9fafb] flex-[1_0_0] min-h-px min-w-px relative w-[400px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Form />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[727.2px] items-start left-[1152px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] top-[87.2px] w-[400px]" data-name="Container">
      <Container53 />
      <Container57 />
    </div>
  );
}

export default function KtuResultAnalyzer() {
  return (
    <div className="bg-white relative size-full" data-name="KTU Result Analyzer">
      <T />
      <Button5 />
      <Container52 />
    </div>
  );
}