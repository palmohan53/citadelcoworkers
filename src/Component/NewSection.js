import servicesContent from '../Content/services.json';

const NewSection = () => {
  const heading = servicesContent?.icontextdesignheading || [];
  const items = servicesContent?.icontextdesign || [];

  return (
    <div className="steps-section">
      {/* HEADING – same simple map */}
      {heading.map((data, index) => (
        <div className="sectionHeading text-center mb-4" key={index}>
          {data?.title?.trim() && <h2>{data.title}</h2>}
          {data?.body?.trim() && <p>{data.body}</p>}
        </div>
      ))}

      {/* ICON ITEMS – same simple map */}
      <div className="steps-grid">
        {items.map((data, index) => (
          <div className="card" key={index}>
            <div className="ribbon">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="content">
              {data?.imageUrl && (
                <div className="icon-box">
                  <img src={data.imageUrl} alt={data.body || ""} />
                </div>
              )}

              {data?.body?.trim() && (
                <div className="text-box">
                  <h3>{data.body}</h3>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewSection;
