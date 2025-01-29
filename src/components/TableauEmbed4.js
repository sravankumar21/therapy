// TableauEmbed5.js
import React, { useEffect } from 'react';

const TableauEmbed4 = () => {
  useEffect(() => {
    const divElement = document.getElementById('viz1718722323476');
    const vizElement = divElement.getElementsByTagName('object')[0];

    function updateSize() {
      if (divElement.offsetWidth > 800) {
        vizElement.style.width = '1000px';
        vizElement.style.height = '827px';
      } else if (divElement.offsetWidth > 500) {
        vizElement.style.width = '1000px';
        vizElement.style.height = '827px';
      } else {
        vizElement.style.width = '100%';
        vizElement.style.height = '927px';
      }
    }

    updateSize(); // Initial sizing

    window.addEventListener('resize', updateSize); // Update sizing on window resize

    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);

    return () => {
      window.removeEventListener('resize', updateSize); // Clean up listener on component unmount
    };
  }, []);

  return (
    <div className="tableau-embed">
      <div className="tableauPlaceholder" id="viz1718722323476" style={{ position: 'relative' }}>
        <noscript>
        <div role="link" tabIndex="0" onClick={() => window.location.href='#'}>
            <img
              alt="Dashboard 1"
              src="https://public.tableau.com/static/images/JC/JC4NJMC7B/1_rss.png"
              style={{ border: 'none' }}
            />
          </div>
        </noscript>
        <object className="tableauViz" style={{ display: 'none' }}>
          <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
          <param name="embed_code_version" value="3" />
          <param name="path" value="shared/JC4NJMC7B" />
          <param name="toolbar" value="yes" />
          <param
            name="static_image"
            value="https://public.tableau.com/static/images/JC/JC4NJMC7B/1.png"
          />
          <param name="animate_transition" value="yes" />
          <param name="display_static_image" value="yes" />
          <param name="display_spinner" value="yes" />
          <param name="display_overlay" value="yes" />
          <param name="display_count" value="yes" />
          <param name="language" value="en-GB" />
          <param name="filter" value="publish=yes" />
        </object>
      </div>
    </div>
  );
};

export default TableauEmbed4;