'use client'
import DatePicker from '@/components/UI/DatePicker/page'
import { useState } from 'react'
import ButtonComponent from '../UI/Button/page'

function TabPanel({ children, value, index, ...props }) {
  const [activeTab, setActiveTab] = useState('active')

  const handleTabClick = (tabId) => {
    setActiveTab(tabId)
  }

  return (
    <div
      className="bg-white md:max-h-[90vh] md:min-h-[90vh] sm:w-[350px] md:w-[400px] p-4 overflow-scroll overflow-x-hidden border border-gray-200 dark:border-gray-700 shadow-lg"
      aria-label="tab-status"
    >
      <nav className="w-full mb-4  flex items-center justify-center">
        <ul
          className="flex -mb-px text-sm font-medium text-center"
          id="tabStatusAccount"
          role="tablist"
        >
          <li className="mr-2" role="statu">
            <ButtonComponent
              id="active-tab"
              className={`${
                activeTab === 'active'
                  ? 'border-blue-500'
                  : 'border-transparent'
              }`}
              size={'small'}
              intent={'outline'}
              onClick={() => handleTabClick('active')}
              rol="tab"
              aria-controls="active"
              aria-selected={activeTab === 'active'}
            >
              Open Accounts
            </ButtonComponent>
          </li>
          <li className="mr-2" role="statu">
            <ButtonComponent
              id="close-tab"
              className={`${
                activeTab === 'close' ? 'border-blue-500' : 'border-transparent'
              }`}
              size={'small'}
              intent={'outline'}
              onClick={() => handleTabClick('close')}
              rol="tab"
              aria-controls="close"
              aria-selected={activeTab === 'close'}
            >
              Open Accounts
            </ButtonComponent>
          </li>
        </ul>
      </nav>
      <>
        <article
          className={`${
            activeTab === 'active' ? 'block' : 'hidden'
          } p-4 rounded-lg bg-gray-50 dark:bg-gray-800 w-full`}
          id="active"
          role="tabpanel"
          aria-labelledby="active-tab"
        >
          <DatePicker status={activeTab} />
        </article>

        <article
          className={`${
            activeTab === 'close' ? 'block' : 'hidden'
          } p-4 rounded-lg bg-gray-50 dark:bg-gray-800 w-full`}
          id="close"
          role="tabpanel"
          aria-labelledby="close-tab"
        >
          <DatePicker status={activeTab} />
        </article>
      </>
    </div>
  )
}

export default TabPanel
