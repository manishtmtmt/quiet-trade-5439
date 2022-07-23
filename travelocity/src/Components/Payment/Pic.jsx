import React from "react";
import styled from "styled-components";

const Pic = () => {
  return (
    <Wrapper>
      <div>
        <img
          src="https://images.trvl-media.com/hotels/70000000/69560000/69551900/69551801/dd25faec_l.jpg"
          alt=""
        />

        <p>
          {" "}
          <span className="span">4.5/5</span> Wonderful (17 reviews){" "}
        </p>
        <br />
        <div> Guests rated this property 4.9/5 for cleanliness </div>
        <br />
        <div> 1 Room: Deluxe Room, 2 Twin Beds </div>

        <p style={{ color: "red" }}> Non-refundable </p>
        <br />

        <div>
          {" "}
          <span className="span">Check-in:</span> Wed, Aug 3{" "}
        </div>
        <div>
          {" "}
          <span className="span">Check-out:</span> Thu, Aug 4{" "}
        </div>
        <div> 1-night stay </div>
      </div>
    </Wrapper>
  );
};

export default Pic;

const Wrapper = styled.div`
  // border: 1px solid red;
  // display: flex;
  // margin: auto;
  // width: 80%;
  // justify-content: space-between;

  .right {
    border: 1px solid green;
    width: 100%;
  }

  .pic {
    // height: 50px;
    margin: 10px;
  }

  .span {
    font-weight: bold;
    // margin-left: 10px;
  }
`;

///////************************************************************* */

// import React from 'react';
// import {
//   Box,
//   Heading,
//   Link,
//   Image,
//   Text,
//   Divider,
//   HStack,
//   Tag,
//   Wrap,
//   WrapItem,
//   SpaceProps,
//   useColorModeValue,
//   Container,
//   VStack,
// } from '@chakra-ui/react';

// interface IBlogTags {
//   tags: Array<string>;
//   marginTop?: SpaceProps['marginTop'];
// }

// const BlogTags: React.FC<IBlogTags> = (props) => {
//   return (
//     <HStack spacing={2} marginTop={props.marginTop}>
//       {props.tags.map((tag) => {
//         return (
//           <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
//             {tag}
//           </Tag>
//         );
//       })}
//     </HStack>
//   );
// };

// interface BlogAuthorProps {
//   date: Date;
//   name: string;
// }

// export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
//   return (
//     <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
//       <Image
//         borderRadius="full"
//         boxSize="40px"
//         src="https://100k-faces.glitch.me/random-image"
//         alt={`Avatar of ${props.name}`}
//       />
//       <Text fontWeight="medium">{props.name}</Text>
//       <Text>—</Text>
//       <Text>{props.date.toLocaleDateString()}</Text>
//     </HStack>
//   );
// };

// const ArticleList = () => {
//   return (
//     <Container maxW={'7xl'} p="12">

//       <Heading as="h2" marginTop="5">
//         Latest articles
//       </Heading>
//       <Divider marginTop="5" />
//       <Wrap spacing="30px" marginTop="5">
//         <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
//           <Box w="100%">
//             <Box borderRadius="lg" overflow="hidden">
//               <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
//                 <Image
//                   transform="scale(1.0)"
//                   src={
//                     'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
//                   }
//                   alt="some text"
//                   objectFit="contain"
//                   width="100%"
//                   transition="0.3s ease-in-out"
//                   _hover={{
//                     transform: 'scale(1.05)',
//                   }}
//                 />
//               </Link>
//             </Box>
//             <BlogTags tags={['Engineering', 'Product']} marginTop="3" />
//             <Heading fontSize="xl" marginTop="2">
//               <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
//                 Some blog title
//               </Link>
//             </Heading>
//             <Box width="100%" height="100px">
//             <Text as="p" fontSize="md" marginTop="2">
//               Lorem Ipsum is simply dummy text of the printing and typesetting
//               industry. Lorem Ipsum has been the industry's standard dummy text
//               ever since the 1500s, when an unknown printer took a galley of
//               type and scrambled it to make a type specimen book.
//             </Text>
//             </Box>
//             <BlogAuthor
//               name="John Doe"
//               date={new Date('2021-04-06T19:01:27Z')}
//             />
//           </Box>
//         </WrapItem>
//       </Wrap>

//     </Container>
//   );
// };

// export default ArticleList;
