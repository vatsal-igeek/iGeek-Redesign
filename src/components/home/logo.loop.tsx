import React from "react";
import LogoLoop from "../common/logo.loop";

const HomeLogoLoop = () => {
  return (
    <section className="my-dashed-border-top  ">
      <div className="max-w-[1200px] mx-auto  py-[69px] my-dashed-border-y">
        <LogoLoop
          logos={[
            {
              src: "/web-logo.svg",
              alt: `Technology `,
            },
          ]}
          logoHeight={40}
          gap={100}
          speed={30}
          scaleOnHover
          fadeOut
        />
      </div>
    </section>
  );
};

export default HomeLogoLoop;
