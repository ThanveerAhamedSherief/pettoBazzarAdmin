// src/About.js
import React from 'react';
import logo from '../../public/logo.png'


const About = () => {
  return (
    <div className="bg-white p-8 md:p-16 lg:p-24">
      <div className="container mx-auto flex items-center">
      {/* <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-indigo-700"> */}
          {/* <img className="w-80 h-80 " src={logo} alt="logo"/> */}
          {/* PetoBazaar     */}
      {/* </a> */}
      <div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-8">
          About Us
        </h1>
        <div className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
          <p className="mb-4">
            Welcome to our Pet Shop, where our passion for pets is evident in every aspect of our business. We are a family-owned and operated store that has been serving the community for over 20 years.
          </p>
          <p className="mb-4">
            Our mission is to provide a wide variety of healthy, happy pets and top-quality pet supplies. We believe that every pet deserves a loving home, and we are dedicated to helping you find the perfect companion to suit your lifestyle.
          </p>
          <p className="mb-4">
            At our shop, you will find a carefully curated selection of pets, from playful puppies and kittens to exotic birds and reptiles. Our knowledgeable staff is always on hand to offer advice and support, ensuring that you have all the information you need to make an informed decision about your new pet.
          </p>
          <p className="mb-4">
            We also offer a variety of services to keep your pet healthy and happy, including grooming, training, and boarding. Our state-of-the-art facilities are designed to provide a safe and comfortable environment for your pet.
          </p>
          <p>
            Thank you for visiting our website. We look forward to welcoming you to our store and helping you find your new best friend!
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;