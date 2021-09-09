/**
 * @desc Component to create  a section
 */

import React, { useState, useEffect } from "react";
// * Componentns
import SectionRender from "../../Components/SectionRender/SectionRender";
import Spinner from "../../../Spinner/Spinner";

// * Import Hooks
import useGetAndSaveEvent from "../../Hooks/useGetAndSaveEvent";
import useEventSection from "../../Hooks/useEventSection";

const Section = (props) => {
  const { id, eventSlug, nameIdentifier } = props.location.state;

  const idSection = id;

  // * HOOKS
  // hook that gets the right section providing an id
  const section = useEventSection(idSection);
  // * States

  // if section is null the event is not loaded into eventGuide in redux

  /**
   * @desc the param section is used in case the page is called
   * directly without passing by <Guide/> or <Home/>
   * if section is null the hook returns otherwise by default returns null
   * cause is already called from <Guide />
   */
  useGetAndSaveEvent(nameIdentifier, section);

  return (
    <>
      {section === null ? (
        <Spinner />
      ) : (
        <SectionRender
          contents={section.contents}
          sectionCover={section.sectionCover}
          sectionDescription={section.description}
          sectionTitle={section.title}
        />
      )}
    </>
  );
};

export default Section;
