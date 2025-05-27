// app/components/ModalTechStack.tsx
import { Dialog } from '@headlessui/react';
import { Fragment } from 'react';
import { PiXBold } from 'react-icons/pi';
import { useState, useEffect } from 'react';

interface TechSkill {
  name: string;
  level: number;
  category: string;
}

interface ModalTechStackProps {
  isOpen: boolean;
  onClose: () => void;
  skills: TechSkill[];
}

export default function ModalTechStack({
  isOpen,
  onClose,
  skills
}: ModalTechStackProps) {
  const [animateBars, setAnimateBars] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Allow mount then trigger
      setTimeout(() => setAnimateBars(true), 100);
    } else {
      setAnimateBars(false);
    }
  }, [isOpen]);

  const grouped = skills.reduce<Record<string, TechSkill[]>>((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <Dialog open={isOpen} onClose={onClose} as={Fragment}>
      <div className="modal-overlay">
        <Dialog.Panel className="modal-panel">
          <div className="modal-header">
            <Dialog.Title className="modal-title">Full Tech Stack</Dialog.Title>
            <button className="modal-close" onClick={onClose}>
              <PiXBold size={22} />
            </button>
          </div>
          <div className="modal-body">
            {Object.entries(grouped).map(([category, items]) => (
              <div key={category}>
                <h4 className="modal-category">{category}</h4>
                <div className="modal-skills-grid">
                  {items.map((skill, i) => (
                    <div
                      className="modal-skill-card"
                      key={i}
                      data-category={skill.category}
                    >
                      <div className="modal-skill-name">{skill.name}</div>
                      <div className="modal-skill-bar">
                        <div
                          className={`modal-skill-bar-inner ${
                            animateBars ? 'animate-bar' : ''
                          }`}
                          style={
                            {
                              '--final-width': `${skill.level}%`
                            } as React.CSSProperties
                          }
                        />
                      </div>
                      <div className="modal-skill-level">{skill.level}%</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
