import styled from "@emotion/styled";
import { useRouter } from "next/router";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import LayoutSidebar from "./sidebar";

const MainDiv = styled.div`
    display: flex;
`;

const SideBarWrapper = styled.div`
    width: 40%;
`;

const MainWrapper = styled.div`
    width: 60%;
`;

interface IProps {
    children: JSX.Element;
}

const SHOW_LAYOUT = ["/09/one", "/09/two", "/09/three"];

export default function Layouts(props: IProps) {
    const router = useRouter();
    const isShowLayout = SHOW_LAYOUT.includes(router.asPath);

    return (
        <>
            {isShowLayout && (
                <>
                    <LayoutHeader />
                    <LayoutBanner />
                    <LayoutNavigation />
                    <MainDiv>
                        <SideBarWrapper>
                            <LayoutSidebar />
                        </SideBarWrapper>
                        <MainWrapper>{props.children}</MainWrapper>
                    </MainDiv>
                    <LayoutFooter />
                </>
            )}
            {!isShowLayout && <>{props.children}</>}
        </>
    );
}
