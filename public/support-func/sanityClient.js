// import sanityClient from "@sanity/client";
import {createClient, groq} from 'next-sanity'

export default createClient({
  projectId: process.env.REACT_APP_PROJECT_ID, // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  useCdn: true,
  ignoreBrowserTokenWarning: true
});