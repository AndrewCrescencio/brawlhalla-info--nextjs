import styled from "styled-components";
import { media } from "../../styles/media-querie";

const Title = styled.h1`
  font-size: 38px;
  font-weight: bold;
  margin-bottom: 8px;
  ${media.tablet`
  font-size: 62px;
  `}
  ${(props) => props.left && "text-align: start !important;"};
  ${(props) => props.center && "text-align: center !important;"};
  ${(props) => props.right && "text-align: right !important;"};
`;

const Heading = styled.h2`
  font-size: 20px;
  font-weight: 501;
  ${media.tablet`
  font-size: 28px;
  `}

  ${(props) => props.left && "text-align: start !important;"};
  ${(props) => props.center && "text-align: center !important;"};
  ${(props) => props.right && "text-align: right !important;"};
`;

const BlockQuote = styled.blockquote`
  border-left: 0.5rem solid;
  filter: brightness(80%);
  padding-left: 20px;
  font-style: italic;
  line-height: 1.5;
  margin: 32px 0;
`;

const Text = styled.p`
  line-height: 1.5;
`;

export { Title, Heading, BlockQuote, Text };
