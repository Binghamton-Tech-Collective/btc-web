export const TeamMember = (props) => {
  const { title, position } = props;

  return (
    <section className="py-20 px-10">
      <h1 className="text-4xl font-bold md:text-left text-center md:px-20 mb-16">
        {title}
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {position.map((member, id) => {
          return (
            <div
              key={id}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg"
            >
              <div className="w-48 h-48 mb-4 overflow-hidden rounded-full">
                <img
                  src={member.image || "/btc_favicon.png"}
                  alt={member.firstName}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.firstName} {member.lastName}</h3>
              <p className="text-gray-600">{member.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
