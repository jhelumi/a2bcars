'use client';
import React from 'react';
import Image from 'next/image';

const TripAdvisorWidgets = () => {
  return (
    <div className="flex w-full">
      <div>
        <div id="TA_rated142" className="TA_rated">
          <ul id="vqLImVxGild" className="TA_links aNKS6ucepQ">
            <li id="TCnOpTADjP" className="7xpQ54s">
              <a
                target="_blank"
                href="https://www.tripadvisor.co.uk/Attraction_Review-g4208470-d17837562-Reviews-A2B_Cars-Long_Crendon_Aylesbury_Aylesbury_Vale_Buckinghamshire_England.html"
              >
                <Image
                  src="https://www.tripadvisor.co.uk/img/cdsi/img2/badges/ollie-11424-2.gif"
                  alt="TripAdvisor"
                  width="60"
                  height="60"
                />
              </a>
            </li>
          </ul>
        </div>
        <script
          async
          src="https://www.jscache.com/wejs?wtype=rated&amp;uniq=142&amp;locationId=17837562&amp;lang=en_UK&amp;display_version=2"
          data-loadtrk
          onLoad={() => {}}
        ></script>
      </div>
      <div className="w-40 h-40">
        <div id="TA_excellent748" className="TA_excellent">
          <ul id="cmRS1H" className="TA_links CB2BAgS">
            <li id="lV9LSt" className="xjIlWHFdKvc">
              <a
                target="_blank"
                href="https://www.tripadvisor.co.uk/Attraction_Review-g4208470-d17837562-Reviews-A2B_Cars-Long_Crendon_Aylesbury_Aylesbury_Vale_Buckinghamshire_England.html"
              >
                <Image
                  src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
                  alt="TripAdvisor"
                  className="widEXCIMG"
                  id="CDSWIDEXCLOGO"
                  width={20}
                  height={20}
                />
              </a>
            </li>
          </ul>
        </div>
        <script
          async
          src="https://www.jscache.com/wejs?wtype=excellent&amp;uniq=748&amp;locationId=17837562&amp;lang=en_UK&amp;display_version=2"
          data-loadtrk
          onLoad={() => {}}
        ></script>
      </div>
      <div className="w-40 h-40">
        <div
          id="TA_certificateOfExcellence304"
          className="TA_certificateOfExcellence"
        >
          <ul id="HcCCWoqDd3rv" className="TA_links qrOTCrVd">
            <li id="d3fSEX6tqOGX" className="AmEYeoN">
              <a
                target="_blank"
                href="https://www.tripadvisor.co.uk/Attraction_Review-g4208470-d17837562-Reviews-A2B_Cars-Long_Crendon_Aylesbury_Aylesbury_Vale_Buckinghamshire_England.html"
              >
                <Image
                  src="https://static.tacdn.com/img2/travelers_choice/widgets/tchotel_2025_LL.png"
                  alt="TripAdvisor"
                  className="widCOEImg"
                  id="CDSWIDCOELOGO"
                  width={10}
                  height={20}
                />
              </a>
            </li>
          </ul>
        </div>
        <script
          async
          src="https://www.jscache.com/wejs?wtype=certificateOfExcellence&amp;uniq=304&amp;locationId=17837562&amp;lang=en_UK&amp;year=2025&amp;display_version=2"
          data-loadtrk
          onLoad={() => {}}
        ></script>
      </div>
    </div>
  );
};

export default TripAdvisorWidgets;
