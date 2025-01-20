import React from 'react';

const links = {
  Company: ['About Us', 'Careers', 'Partners', 'Blog'],
  Resources: ['Documentation', 'Support', 'FAQ', 'Community'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy']
};

export const FooterLinks = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
      {Object.entries(links).map(([category, items]) => (
        <div key={category}>
          <h3 className="text-white font-semibold mb-4">{category}</h3>
          <ul className="space-y-3">
            {items.map((item) => (
              <li key={item}>
                <a
                  href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};