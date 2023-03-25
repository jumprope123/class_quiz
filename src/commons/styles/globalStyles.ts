import { css } from "@emotion/react";

export const globalCSS = css`
    * {
        box-sizing: border-box;
        margin: 0;
        font-size: 30px;
        font-family: "Courier New", Courier, monospace;
    }

    @font-face {
        font-family: "myfont";
        src: url("/fonts/scifibit.ttf");
    }
`;
