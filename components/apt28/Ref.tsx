import React from "react";

const Ref = () => {
  return (
    <div className="mt-10 z-20 min-h-[100vh]  py-10 mx-12 px-36 relative">
      <h3 className="text-center text-[40px] mb-6">REFERENCES</h3>
      <ul className="   list-disc cursor-pointer pl-4">
        <li>
          <p id="cite1" className="mb-5 flex items-start italic">
            <sup>1</sup>
            <a
              href="https://attack.mitre.org/groups/G0007/#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              MITRE ATT&CK. (n.d.).
            </a>
          </p>
        </li>
        <li>
          <p id="cite2" className="mb-5 flex items-start italic">
            <sup>2</sup>
            <a
              href="https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-108"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Cybersecurity and infrastructure security agency.
            </a>
          </p>
        </li>
        <li>
          <p id="cite3" className="mb-5 flex items-start italic">
            <sup>3</sup>
            <a
              href="https://www.crowdstrike.com/blog/who-is-fancy-bear/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Crowdstrike Global Threat Report: 2015 Year in Review Retrieved
              from
            </a>
          </p>
        </li>
        <li>
          <p id="cite4" className="mb-5 flex items-start italic">
            <sup>4</sup>
            <a
              href="https://unit42.paloaltonetworks.com/russian-apt-fighting-ursa-exploits-cve-2023-233397/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Palo Alto resources: Fighting Ursa Aka APT 28.
            </a>
          </p>
        </li>
        <li>
          <p id="cite5" className="mb-5 flex items-start italic">
            <sup>5</sup>
            <a
              href="https://www.cisco.com/c/en/us/products/security/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Cisco. (2023). Cisco Secure
            </a>
          </p>
        </li>
        <li>
          <p id="cite6" className="mb-5 flex items-start italic">
            <sup>6</sup>
            <a
              href="https://www.mandiant.com/resources/insights/apt-groups"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              https://www.mandiant.com/resources/insights/apt-groups
            </a>
          </p>
        </li>
        <li>
          <p id="cite7" className="mb-5 flex items-start italic">
            <sup>7</sup>
            <a
              href="https://cybermaterial.com/apt28/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              https://cybermaterial.com/apt28/
            </a>
          </p>
        </li>
        <li>
          <p id="cite8" className="mb-5 flex items-start italic">
            <sup>8</sup>
            <a
              href="https://www.zimperium.com/glossary/apt28/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              https://www.zimperium.com/glossary/apt28/
            </a>
          </p>
        </li>
        <li>
          <p id="cite9" className="mb-5 flex items-start italic">
            <sup>9</sup>
            <a
              href="https://www.waterisac.org/system/files/articles/NCSC_APT28_Advisory.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              https://www.waterisac.org/system/files/articles/NCSC_APT28_Advisory.pdf
            </a>
          </p>
        </li>
        <li>
          <p id="cite9" className="mb-5 flex items-start italic">
            <sup>10</sup>
            <a
              href="https://quointelligence.eu/2020/09/apt28-zebrocy-malware-campaign-nato-theme/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              https://quointelligence.eu/2020/09/apt28-zebrocy-malware-campaign-nato-
              theme/
            </a>
          </p>
        </li>
        <li>
          <p id="cite9" className="mb-5 flex items-start italic">
            <sup>11</sup>
            <a
              href="https://www.bleepingcomputer.com/news/security/russian-hackers-hide-zebrocy-malware-in-virtual-disk-images/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              https://www.bleepingcomputer.com/news/security/russian-hackers-hide-
              zebrocy-malware-in-virtual-disk-images/
            </a>
          </p>
        </li>
      </ul>
      <div className="absolute z-[0] w-[25%] h-[25%] left-20 bottom-20 blue__gradient " />
      <div className="absolute z-[0] w-[25%] h-[25%] right-20 top-20 blue__gradient " />
    </div>
  );
};

export default Ref;
