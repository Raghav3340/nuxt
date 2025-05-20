// app/composables/useAemFragment.ts
export const useAemFragment = (fragmentName: string): string => {
    const dummyFragments: Record<string, string> = {
      "himalayan-odyssey": `
        <section style="
          max-width: 1200px;
          width: 95%;
          margin: 0 auto;
          background: linear-gradient(135deg, #8B0000, #B22222);
          color: #fff;
          padding: 3rem 1rem;
          text-align: center;
          border-radius: 16px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
          font-family: sans-serif;
          box-sizing: border-box;
          overflow: hidden;
        ">
          <h1 style="font-size: clamp(1.5rem, 4vw, 2.5rem); margin-bottom: 1rem;">Himalayan Odyssey 2025</h1>
          <p style="font-size: clamp(0.9rem, 2vw, 1.25rem); margin-bottom: 1.5rem; max-width: 800px; margin-left: auto; margin-right: auto;">
            Join us on an epic journey through the majestic Himalayas. Experience breathtaking landscapes, ancient cultures, and the thrill of the world's most challenging terrain.
          </p>
          <div style="margin-bottom: 2rem; display: flex; flex-wrap: wrap; justify-content: center; gap: 0.5rem;">
            <span style="
              display: inline-block;
              background: rgba(0,0,0,0.2);
              padding: 0.5rem 1rem;
              border-radius: 50px;
              font-size: 0.9rem;
            ">16 Days</span>
            <span style="
              display: inline-block;
              background: rgba(0,0,0,0.2);
              padding: 0.5rem 1rem;
              border-radius: 50px;
              font-size: 0.9rem;
            ">Expert Guides</span>
            <span style="
              display: inline-block;
              background: rgba(0,0,0,0.2);
              padding: 0.5rem 1rem;
              border-radius: 50px;
              font-size: 0.9rem;
            ">All-Inclusive</span>
          </div>
          <div style="
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 2rem;
          ">
            <button style="
              padding: 0.75rem 1.5rem;
              font-size: 1rem;
              background: #000;
              color: white;
              border: none;
              border-radius: 8px;
              cursor: pointer;
              transition: all 0.3s ease;
            ">Know More</button>
            <button style="
              padding: 0.75rem 1.5rem;
              font-size: 1rem;
              background: transparent;
              color: white;
              border: 2px solid white;
              border-radius: 8px;
              cursor: pointer;
              transition: all 0.3s ease;
            ">Book Now</button>
          </div>
          <div style="
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
            margin-top: 2rem;
            width: 100%;
          ">
            <div style="
              background: rgba(0,0,0,0.2);
              padding: 1.5rem;
              border-radius: 12px;
              flex: 1 1 250px;
              max-width: 100%;
              box-sizing: border-box;
            ">
              <h3 style="margin-bottom: 0.75rem; font-size: 1.2rem;">Expert Guidance</h3>
              <p style="font-size: 0.95rem;">Led by seasoned mountaineers with over 100+ Himalayan expeditions.</p>
            </div>
            <div style="
              background: rgba(0,0,0,0.2);
              padding: 1.5rem;
              border-radius: 12px;
              flex: 1 1 250px;
              max-width: 100%;
              box-sizing: border-box;
            ">
              <h3 style="margin-bottom: 0.75rem; font-size: 1.2rem;">Premium Accommodations</h3>
              <p style="font-size: 0.95rem;">Stay in carefully selected lodges and luxury camps throughout your journey.</p>
            </div>
            <div style="
              background: rgba(0,0,0,0.2);
              padding: 1.5rem;
              border-radius: 12px;
              flex: 1 1 250px;
              max-width: 100%;
              box-sizing: border-box;
            ">
              <h3 style="margin-bottom: 0.75rem; font-size: 1.2rem;">Authentic Experiences</h3>
              <p style="font-size: 0.95rem;">Immerse in local culture with village visits and traditional ceremonies.</p>
            </div>
          </div>
        </section>
      `,
      "upcoming-rides": `
        <section style="
          max-width: 1200px;
          width: 95%;
          margin: 2rem auto;
          background-color: #111;
          color: white;
          padding: 2.5rem 1rem;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          font-family: sans-serif;
          box-sizing: border-box;
          overflow: hidden;
        ">
          <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; margin-bottom: 2rem; gap: 1rem;">
            <h2 style="font-size: clamp(1.5rem, 3vw, 2rem); margin: 0;">Upcoming Rides</h2>
            <div>
              <button style="
                background: transparent;
                border: 1px solid #555;
                color: white;
                padding: 0.5rem 1rem;
                margin-right: 0.5rem;
                border-radius: 4px;
                cursor: pointer;
                margin-bottom: 0.5rem;
                display: inline-block;
              ">Filter</button>
              <button style="
                background: #8B0000;
                border: none;
                color: white;
                padding: 0.5rem 1rem;
                border-radius: 4px;
                cursor: pointer;
                margin-bottom: 0.5rem;
                display: inline-block;
              ">View All</button>
            </div>
          </div>
          <p style="font-size: clamp(0.9rem, 1.5vw, 1.1rem); margin-bottom: 2rem;">Join our legendary rides – where adventure meets brotherhood. We've crafted unforgettable motorcycle journeys for riders of all levels.</p>
          
          <div style="
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
            width: 100%;
          ">
            <div style="
              background: #1a1a1a;
              border-radius: 12px;
              overflow: hidden;
              transition: transform 0.3s ease;
              width: 100%;
              box-sizing: border-box;
            ">
              <div style="height: 160px; background: #333; position: relative;">
                <div style="
                  position: absolute;
                  top: 10px;
                  right: 10px;
                  background: #8B0000;
                  color: white;
                  padding: 0.25rem 0.75rem;
                  border-radius: 4px;
                  font-size: 0.8rem;
                ">Booking Open</div>
              </div>
              <div style="padding: 1.25rem;">
                <h3 style="margin-bottom: 0.5rem; font-size: 1.2rem;">Ladakh Adventure</h3>
                <p style="color: #aaa; font-size: 0.9rem; margin-bottom: 1rem;">June 10-25, 2025 • 16 Days</p>
                <p style="font-size: 0.9rem; margin-bottom: 1rem;">Experience the rugged beauty of the highest motorable roads in the world.</p>
                <button style="
                  width: 100%;
                  padding: 0.75rem;
                  background: transparent;
                  border: 1px solid #8B0000;
                  color: #8B0000;
                  border-radius: 6px;
                  cursor: pointer;
                ">Details</button>
              </div>
            </div>
  
            <div style="
              background: #1a1a1a;
              border-radius: 12px;
              overflow: hidden;
              transition: transform 0.3s ease;
              width: 100%;
              box-sizing: border-box;
            ">
              <div style="height: 160px; background: #333; position: relative;">
                <div style="
                  position: absolute;
                  top: 10px;
                  right: 10px;
                  background: #555;
                  color: white;
                  padding: 0.25rem 0.75rem;
                  border-radius: 4px;
                  font-size: 0.8rem;
                ">Coming Soon</div>
              </div>
              <div style="padding: 1.25rem;">
                <h3 style="margin-bottom: 0.5rem; font-size: 1.2rem;">Western Ghats Trail</h3>
                <p style="color: #aaa; font-size: 0.9rem; margin-bottom: 1rem;">August 5-12, 2025 • 8 Days</p>
                <p style="font-size: 0.9rem; margin-bottom: 1rem;">Lush green mountains and misty roads through India's western coast.</p>
                <button style="
                  width: 100%;
                  padding: 0.75rem;
                  background: transparent;
                  border: 1px solid #555;
                  color: #555;
                  border-radius: 6px;
                  cursor: pointer;
                ">Notify Me</button>
              </div>
            </div>
  
            <div style="
              background: #1a1a1a;
              border-radius: 12px;
              overflow: hidden;
              transition: transform 0.3s ease;
              width: 100%;
              box-sizing: border-box;
            ">
              <div style="height: 160px; background: #333; position: relative;">
                <div style="
                  position: absolute;
                  top: 10px;
                  right: 10px;
                  background: #8B0000;
                  color: white;
                  padding: 0.25rem 0.75rem;
                  border-radius: 4px;
                  font-size: 0.8rem;
                ">Last Spots</div>
              </div>
              <div style="padding: 1.25rem;">
                <h3 style="margin-bottom: 0.5rem; font-size: 1.2rem;">Rajasthan Desert Ride</h3>
                <p style="color: #aaa; font-size: 0.9rem; margin-bottom: 1rem;">October 15-22, 2025 • 8 Days</p>
                <p style="font-size: 0.9rem; margin-bottom: 1rem;">Journey through golden sands and ancient forts of royal Rajasthan.</p>
                <button style="
                  width: 100%;
                  padding: 0.75rem;
                  background: transparent;
                  border: 1px solid #8B0000;
                  color: #8B0000;
                  border-radius: 6px;
                  cursor: pointer;
                ">Details</button>
              </div>
            </div>
          </div>
  
          <div style="text-align: center; margin-top: 2rem;">
            <p style="margin-bottom: 1rem; font-size: 1.1rem;">Can't find what you're looking for?</p>
            <button style="
              background: #8B0000;
              color: white;
              border: none;
              padding: 0.75rem 2rem;
              border-radius: 8px;
              font-size: 1rem;
              cursor: pointer;
            ">Explore All Destinations</button>
          </div>
        </section>
      `,
      "rider-testimonials": `
        <section style="
          max-width: 1200px;
          width: 95%;
          margin: 2rem auto;
          background: linear-gradient(135deg, #222, #111);
          color: white;
          padding: 3rem 1rem;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          font-family: sans-serif;
          box-sizing: border-box;
          overflow: hidden;
        ">
          <h2 style="text-align: center; font-size: clamp(1.5rem, 3vw, 2rem); margin-bottom: 2rem;">Rider Testimonials</h2>
          
          <div style="
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
            width: 100%;
          ">
            <div style="
              background: rgba(255,255,255,0.05);
              border-radius: 12px;
              padding: 1.5rem;
              position: relative;
              width: 100%;
              box-sizing: border-box;
            ">
              <div style="
                width: 60px;
                height: 60px;
                background: #444;
                border-radius: 50%;
                margin-bottom: 1rem;
              "></div>
              <p style="font-style: italic; margin-bottom: 1rem; font-size: 0.95rem; line-height: 1.6;">
                "The Himalayan Odyssey was the ride of a lifetime. The team's attention to detail and knowledge of the terrain made this challenging journey both safe and exhilarating."
              </p>
              <p style="font-weight: bold; margin-bottom: 0.25rem;">Rajiv Mehta</p>
              <p style="font-size: 0.85rem; color: #aaa;">Delhi, India • June 2024</p>
            </div>
            
            <div style="
              background: rgba(255,255,255,0.05);
              border-radius: 12px;
              padding: 1.5rem;
              position: relative;
              width: 100%;
              box-sizing: border-box;
            ">
              <div style="
                width: 60px;
                height: 60px;
                background: #444;
                border-radius: 50%;
                margin-bottom: 1rem;
              "></div>
              <p style="font-style: italic; margin-bottom: 1rem; font-size: 0.95rem; line-height: 1.6;">
                "As a solo female rider, I was nervous about joining a group expedition. The team made me feel completely welcome and secure throughout the journey."
              </p>
              <p style="font-weight: bold; margin-bottom: 0.25rem;">Sarah Johnson</p>
              <p style="font-size: 0.85rem; color: #aaa;">London, UK • April 2024</p>
            </div>
            
            <div style="
              background: rgba(255,255,255,0.05);
              border-radius: 12px;
              padding: 1.5rem;
              position: relative;
              width: 100%;
              box-sizing: border-box;
            ">
              <div style="
                width: 60px;
                height: 60px;
                background: #444;
                border-radius: 50%;
                margin-bottom: 1rem;
              "></div>
              <p style="font-style: italic; margin-bottom: 1rem; font-size: 0.95rem; line-height: 1.6;">
                "Three rides with this team and counting! Their attention to rider safety while ensuring maximum adventure is the perfect balance."
              </p>
              <p style="font-weight: bold; margin-bottom: 0.25rem;">Michael Chen</p>
              <p style="font-size: 0.85rem; color: #aaa;">Singapore • September 2024</p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 2.5rem;">
            <button style="
              background: transparent;
              border: 2px solid #8B0000;
              color: #8B0000;
              padding: 0.75rem 2rem;
              border-radius: 8px;
              font-size: 1rem;
              cursor: pointer;
            ">Read More Stories</button>
          </div>
        </section>
      `,
      "newsletter-signup": `
        <section style="
          max-width: 1200px;
          width: 95%;
          margin: 2rem auto;
          background: linear-gradient(135deg, #111, #222);
          color: white;
          padding: 3rem 1rem;
          border-radius: 16px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
          font-family: sans-serif;
          text-align: center;
          box-sizing: border-box;
          overflow: hidden;
        ">
          <h2 style="font-size: clamp(1.5rem, 3vw, 2rem); margin-bottom: 1rem;">Join Our Riders Community</h2>
          <p style="font-size: clamp(0.9rem, 1.5vw, 1.1rem); margin-bottom: 2rem; max-width: 700px; margin-left: auto; margin-right: auto;">
            Subscribe to our newsletter and be the first to know about upcoming rides, exclusive events, and riding tips.
          </p>
          
          <div style="
            display: flex;
            flex-wrap: wrap;
            max-width: 600px;
            margin: 0 auto;
            gap: 0.5rem;
            justify-content: center;
            width: 100%;
            box-sizing: border-box;
          ">
            <input type="email" placeholder="Your email address" style="
              flex: 1 1 200px;
              min-width: 0;
              max-width: 100%;
              padding: 0.75rem 1rem;
              border: none;
              border-radius: 8px;
              background: rgba(255,255,255,0.1);
              color: white;
              font-size: 1rem;
              box-sizing: border-box;
            ">
            <button style="
              padding: 0.75rem 1.5rem;
              background: #8B0000;
              color: white;
              border: none;
              border-radius: 8px;
              font-size: 1rem;
              cursor: pointer;
              box-sizing: border-box;
            ">Subscribe</button>
          </div>
          
          <p style="font-size: 0.8rem; margin-top: 1rem; color: #aaa;">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </section>
      `
    };
  
    return dummyFragments[fragmentName] || "<div>Fragment not found</div>";
  };