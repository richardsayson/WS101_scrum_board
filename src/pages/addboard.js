import { useState } from 'react';

export default function addBoard(){
  const [showInputs, setShowInputs] = useState(false);
  const [inputTitle, setinputTitle] = useState('');
  const [inputDescription, setinputDescription] = useState('');
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    if (inputTitle && inputDescription) {
      setItems((prevItems) => [...prevItems,{ inputTitle, inputDescription },]);
      setinputTitle('');
      setinputDescription('');
      setShowInputs(false);
    }
  };

    const handleCancel = () => {
        setShowInputs(false);
        setinputTitle('');
        setinputDescription('');
    };
    
    return(
      <div>
          {items.length >= 0 && (
            <ul className="grid grid-cols-3 gap-5 mx-10">
              {items.map((item, index) => (
                <li key={index}
                  className="my-2 p-5 bg-blue-200 border border-gray-900 rounded-xl"
                >
                  <div className="w-full font-bold font-mono text-lg">{item.inputTitle}</div>
                  <div>
                    <textarea 
                      disable
                      value={item.inputDescription} 
                      className="w-full my-2 font-mono text-sm bg-blue-200"/></div>
                </li>
              ))}

        <div>
           
                {!showInputs && (
                      <div className="mt-2 bg-blue-200 border border-gray-400 rounded-xl mb-10">
                  <button
                    className="w-[385px] h-full p-4 text-center text-5xl font-bold font-mono text-gray-900 rounded-lg hover:bg-blue-900 hover:text-blue-200"
                    onClick={() => setShowInputs(true)}
                  >
                    +
                  </button>
                  </div>
                )}
              
                {showInputs && (
                    <div className="fixed inset-0 flex items-center justify-center bg-transparent">
                          <div className="py-10 px-4 border border-gray-400 rounded-xl mt-2 bg-blue-200 mb-10 mx-3 my-3">
                            <input
                              type="text"
                              value={inputTitle}
                              onChange={(e) => setinputTitle(e.target.value)}
                              className="w-full p-2 mb-5 text-md font-mono rounded-md"
                              placeholder="Board Title"
                            />
                            <textarea
                              type="text"
                              value={inputDescription}
                              onChange={(e) => setinputDescription(e.target.value)}
                              className="w-full p-2 pb-16 text-md font-mono rounded-md"
                              placeholder="Enter a description..."
                            />
                            <div className="flex my-5">
                              <button
                                className="w-full mr-4 p-1 text-center font-mono text-black-900 bg-blue-300 rounded-md hover:bg-blue-700
                                border border-blue-900"
                                onClick={handleCancel}
                              >
                                Cancel
                              </button>
                              <button
                                className="w-full p-2 font-mono text-center text-black-400 bg-blue-300 rounded-md hover:bg-blue-700
                                border border-blue-900"
                                onClick={handleAdd}
                              >
                                Add
                              </button>
                            </div>
                          </div>
                          </div>
                        )}                   
          </div>
            </ul>
          )}
        
        </div>
    
    )
}