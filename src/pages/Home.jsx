// Modules
import React, { useState, useEffect } from 'react';

// Contexts
import { useHomepage } from '../contexts/data/HomepageContext';
import { useCustomerTestimonials } from '../contexts/data/CustomerTestimonialsContext';
import { useOrganisations } from '../contexts/data/OrganisationsContext';
import { useAwards } from '../contexts/data/AwardsContext';

// Components
import Header from './../components/Home/Header';
import Introduction from './../components/Home/Introduction';
import Achievements from './../components/Home/Achievements';
import CustomerTestimonials from './../components/Home/CustomerTestimonials';
import Organisations from './../components/Home/Organisations';
import Awards from './../components/Home/Awards';

const Homepage = () => {
  const homepage = useHomepage();
  const customerTestimonials = useCustomerTestimonials();
  const organisations = useOrganisations();
  const awards = useAwards();

  const [displayDataHomepage, setDisplayDataHomepage] = useState(undefined);
  const [displayDataCustomerTestimonials, setDisplayDataCustomerTestimonials] = useState([]);
  const [displayDataOrganisations, setDisplayDataOrganisations] = useState([]);
  const [displayDataAwards, setDisplayDataAwards] = useState([]);

  useEffect(() => {
    // Get data on page load
    homepage.getData();
    customerTestimonials.getData();
    organisations.getData();
    awards.getData();
  }, []);

  useEffect(() => {
    setDisplayDataHomepage(homepage.data);
  }, [homepage.data]);

  useEffect(() => {
    setDisplayDataCustomerTestimonials(customerTestimonials.data);
  }, [customerTestimonials.data]);

  useEffect(() => {
    setDisplayDataOrganisations(organisations.data);
  }, [organisations.data]);

  useEffect(() => {
    setDisplayDataAwards(awards.data);
  }, [awards.data]);

  if (!displayDataHomepage || !displayDataCustomerTestimonials) return null;

  return <>
    <Header data={{
      header_logo: displayDataHomepage?.header_logo,
      header_background: displayDataHomepage?.header_background,
      header_title: displayDataHomepage?.header_title,
      header_subtitle: displayDataHomepage?.header_subtitle
    }} />

    <Introduction data={{
      introduction_title: displayDataHomepage?.introduction_title,
      introduction_text: displayDataHomepage?.introduction_text,
      introduction_image: displayDataHomepage?.introduction_image
    }} />

    <Achievements data={{
      achievements: displayDataHomepage?.achievements,
      achievements_title: displayDataHomepage?.achievements_title
    }} />

    <CustomerTestimonials data={{
      testimonials_title: displayDataHomepage?.testimonials_title,
      testimonials: displayDataCustomerTestimonials
    }} />

    <Awards data={{
      awards_title: displayDataHomepage?.awards_title,
      awards: displayDataAwards
    }} />

    <Organisations data={{
      organisations_title: displayDataHomepage?.organisations_title,
      organisations: displayDataOrganisations
    }} />
    
  </>
}

export default Homepage;
