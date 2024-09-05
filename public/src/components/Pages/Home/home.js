import React from 'react';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import Banner from '../../Homepage/banner';
import MoneyComplicated from '../../Homepage/moneyComplicated';
import RulesForStress from '../../Homepage/rulesForStress';
import WorkSection from '../../Homepage/workSection';
import WhyNab from '../../Homepage/whyNab';

const Home = () => {
  return (
    <>
      <Banner/>
      <MoneyComplicated/>
      <RulesForStress/>
      <WorkSection/>
      <WhyNab/>
    </>
  );
}

export default Home;

