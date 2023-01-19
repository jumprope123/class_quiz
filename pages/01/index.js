import { ActivatedMenuItem, ContentsDiv, ContentsWrapper, FirstContentsDiv, IconCenter, IconDiv, IconWrapper, ImageIcon, LeftBottomContents, LeftContents, LeftTopContents, MenuItem, MenuWrapper, RightArrow, RightContents, TitleDiv, TitleWrapper, UnderLine, UnderMenuBar, UnderMenuDiv, UnderMenuDivText, UserName, WrapperDiv } from '../../styles/01/emotion'
import { Search,NavigateNext,ExpandMore, Home, HomeOutlined, FmdGoodOutlined, FavoriteBorderOutlined, Person } from '@mui/icons-material';

export default function home_01(){
    return(
        <WrapperDiv>
            <IconWrapper>
                  <Search style={{fontSize:'45px'}}/>
            </IconWrapper>
            <TitleWrapper>
                <TitleDiv>마이</TitleDiv>
                <IconDiv>
                    <ImageIcon src='../images/face.png'/>
                    <UserName>임정아</UserName>
                    <RightArrow>
                        <NavigateNext style={{fontSize:'32px', color:'gray'}}/>
                    </RightArrow>
                </IconDiv>
            </TitleWrapper>
            <MenuWrapper>
                <MenuItem>공지사항</MenuItem>
                <MenuItem>이벤트</MenuItem>
                <ActivatedMenuItem>FAQ</ActivatedMenuItem>
                <MenuItem>Q&A</MenuItem>
            </MenuWrapper>
            <UnderLine></UnderLine>
            <ContentsWrapper>
                <FirstContentsDiv>
                    <LeftContents>
                        <LeftTopContents>Q. 01</LeftTopContents>
                        <LeftBottomContents>리뷰 작성은 어떻게 하나요?</LeftBottomContents>
                    </LeftContents>
                    <RightContents>
                        <ExpandMore style={{fontSize:'50px', color:'#ADADAD'}}/>
                    </RightContents>
                </FirstContentsDiv>
                <ContentsDiv>
                    <LeftContents>
                        <LeftTopContents>Q. 02</LeftTopContents>
                        <LeftBottomContents>리뷰 수정/삭제는 어떻게 하나요?</LeftBottomContents>
                    </LeftContents>
                    <RightContents>
                        <ExpandMore style={{fontSize:'50px', color:'#ADADAD'}}/>
                    </RightContents>
                </ContentsDiv>
                <ContentsDiv>
                    <LeftContents>
                        <LeftTopContents>Q. 03</LeftTopContents>
                        <LeftBottomContents>아이디/비밀번호를 잊어버렸어요</LeftBottomContents>
                    </LeftContents>
                    <RightContents>
                        <ExpandMore style={{fontSize:'50px', color:'#ADADAD'}}/>
                    </RightContents>
                </ContentsDiv>
                <ContentsDiv>
                    <LeftContents>
                        <LeftTopContents>Q. 04</LeftTopContents>
                        <LeftBottomContents>회원탈퇴를 하고싶어요.</LeftBottomContents>
                    </LeftContents>
                    <RightContents>
                        <ExpandMore style={{fontSize:'50px', color:'#ADADAD'}}/>
                    </RightContents>
                </ContentsDiv>
                <ContentsDiv>
                    <LeftContents>
                        <LeftTopContents>Q. 05</LeftTopContents>
                        <LeftBottomContents>출발지 설정은 어떻게 하나요?</LeftBottomContents>
                    </LeftContents>
                    <RightContents>
                        <ExpandMore style={{fontSize:'50px', color:'#ADADAD'}}/>
                    </RightContents>
                </ContentsDiv>
                <ContentsDiv>
                    <LeftContents>
                        <LeftTopContents>Q. 06</LeftTopContents>
                        <LeftBottomContents>비밀번호를 변경하고 싶어요</LeftBottomContents>
                    </LeftContents>
                    <RightContents>
                        <ExpandMore style={{fontSize:'50px', color:'#ADADAD'}}/>
                    </RightContents>
                </ContentsDiv>
            </ContentsWrapper>
            <UnderLine></UnderLine>
            <UnderMenuBar>
                <UnderMenuDiv>
                    <IconCenter>
                        <HomeOutlined style={{fontSize:'50px', color:'#ADADAD'}}/>
                    </IconCenter>
                    <UnderMenuDivText>홈</UnderMenuDivText>
                </UnderMenuDiv>
                <UnderMenuDiv>
                    <IconCenter>
                        <FmdGoodOutlined style={{fontSize:'50px', color:'#ADADAD'}}/>
                    </IconCenter>
                    <UnderMenuDivText>잇츠로드</UnderMenuDivText>
                </UnderMenuDiv>
                <UnderMenuDiv>
                    <IconCenter>
                        <FavoriteBorderOutlined style={{fontSize:'50px', color:'#ADADAD'}}/>
                    </IconCenter>
                    <UnderMenuDivText>마이찜</UnderMenuDivText>
                </UnderMenuDiv>
                <UnderMenuDiv>
                    <IconCenter>
                        <Person style={{fontSize:'50px', color:'red'}}/>
                    </IconCenter>
                    <UnderMenuDivText>마이</UnderMenuDivText>
                </UnderMenuDiv>
            </UnderMenuBar>
        </WrapperDiv>
    )
}