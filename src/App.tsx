import React, { useEffect, useState } from 'react';
import * as ModelBanner from "./models/banner"


function App() {
  const [banners, setBanners] = useState<Array<ModelBanner.BannerData> | null>(null)

  useEffect(() => {
    (async () => {
      let banners = await ModelBanner.getAllBanner()
      setBanners(banners)
    })();
  }, [])

  return (
    <div>
      <ul>
        {banners && banners.map(banner => (
          <li key={banner.ID}>
            {banner.ID},
            {banner.img}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;