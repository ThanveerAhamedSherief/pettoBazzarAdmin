// import React from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import IconButton from '@material-ui/core/IconButton';

// const CustomPrevArrow = (props) => {
//   const { className, onClick } = props;
//   return (
//     <IconButton
//       className={`${className} absolute top-2/4 left-4 -translate-y-2/4`}
//       onClick={onClick}
//       style={{ zIndex: 1 }}
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth={2}
//         stroke="currentColor"
//         className="h-6 w-6"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
//         />
//       </svg>
//     </IconButton>
//   );
// };

// const CustomNextArrow = (props) => {
//   const { className, onClick } = props;
//   return (
//     <IconButton
//       className={`${className} absolute top-2/4 right-4 -translate-y-2/4`}
//       onClick={onClick}
//       style={{ zIndex: 1 }}
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth={2}
//         stroke="currentColor"
//         className="h-6 w-6"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
//         />
//       </svg>
//     </IconButton>
//   );
// };

// const ImageCarousel = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     prevArrow: <CustomPrevArrow />,
//     nextArrow: <CustomNextArrow />,
//   };

//   return (
//     <div className="container mx-auto py-8">
//       <Slider {...settings} className="rounded-xl">
//         <div>
//           <img
//             src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
//             alt="image 1"
//             className="h-full w-full object-cover"
//           />
//         </div>
//         <div>
//           <img
//             src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
//             alt="image 2"
//             className="h-full w-full object-cover"
//           />
//         </div>
//         <div>
//           <img
//             src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
//             alt="image 3"
//             className="h-full w-full object-cover"
//           />
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default ImageCarousel;