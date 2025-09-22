import React from 'react'
import SideBar from '../layout_files/SideBar'
import { BsFillPlugFill } from 'react-icons/bs';
import { FaRegCheckCircle } from 'react-icons/fa';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const IntegrationSupport = () => {
    return (
        <div className="bg-[#f4f2ff] md:flex mt-18 font-sans relative w-full">
            <div className="h-screen z-2 hidden md:flex md:fixed top-18 ">
                <SideBar />
            </div>
            <div className="min-h-screen md:w-[50%] relative md:ml-65 flex flex-1 flex-col p-8 ">
                <div className='font-bold md:text-4xl text-3xl md: w-full flex items-center my-3'>
                    <div><BsFillPlugFill /></div>
                    <div>Integration Support</div>
                </div>
                <div className='w-full max-md:text-center'>
                    <p className="text-base text-gray-600 leading-relaxed">Manage integrations with Learning Management Systems (LMS), Enterprise Resource Planning (ERP), and other university systems.</p>
                </div>
                <section className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 my-10">
                    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                        <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-3">LMS</h3>
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Status:</span>
                                <span className="inline-flex items-center  rounded-full p-1 px-2 text-xs font-medium bg-green-400/20 text-green-600">Connected</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Last Sync:</span>
                                <span className="font-medium text-[var(--text-primary)]">2024-03-15</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Next Sync:</span>
                                <span className="font-medium text-[var(--text-primary)]">2024-03-16</span>
                            </div>
                        </div>
                        <div className="mt-6 flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-600">Connect</span>
                            <label class="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" />
                                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">ERP</h3>
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Status:</span>
                                <span className="inline-flex items-center  rounded-full text-xs font-medium p-1 px-2 bg-red-100 text-red-500">Disconnected</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Last Sync:</span>
                                <span className="font-medium text-[var(--text-primary)]">2024-03-10</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Next Sync:</span>
                                <span className="font-medium text-[var(--text-primary)]">N/A</span>
                            </div>
                        </div>
                        <div className="mt-6 flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-600">Connect</span>
                            <label class="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" />
                                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">University Systems</h3>
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Status:</span>
                                <span className="inline-flex items-center  rounded-full text-xs font-medium bg-yellow-200 p-1 px-2 text-yellow-600">Pending</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Last Sync:</span>
                                <span className="font-medium text-[var(--text-primary)]">2024-03-14</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Next Sync:</span>
                                <span className="font-medium text-[var(--text-primary)]">2024-03-15</span>
                            </div>
                        </div>
                        <div className="mt-6 flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-600">Connect</span>
                            <label class="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" />
                                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                    </div>
                </section>

                <section className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-5">API Configuration</h2>
                    <div className=" text-green-500 px-4 py-3 rounded-md text-sm font-medium flex items-center gap-2 mb-6">
                        <span className="material-symbols-outlined">
                            <FaRegCheckCircle size={20} />
                        </span>
                        Connection Status: Connected
                    </div>
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="api_key">API Key</label>
                                <input className="block w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-[var(--text-primary)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-b-blue-500" id="api_key" placeholder="******************" type="text" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="endpoint_url">Endpoint URL</label>
                                <input className="block w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-[var(--text-primary)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-b-blue-500" id="endpoint_url" placeholder="https://api.acme.edu/v1" type="text" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="client_id">Client ID</label>
                                <input className="block w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-[var(--text-primary)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-b-blue-500" id="client_id" placeholder="ab12cd34ef56gh78" type="text" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="secret_key">Secret Key</label>
                                <input className="block w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-[var(--text-primary)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-b-blue-500" id="secret_key" placeholder="••••••••••••••••" type="password" />
                            </div>
                        </div>
                        <div className="flex justify-center md:justify-end items-center gap-4 pt-4">
                            <button className="bg-gray-200 text-gray-600 px-6 py-3 rounded-md font-medium hover:bg-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 cursor-pointer">Test Connection</button>
                            <button className="bg-blue-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer">Save Changes</button>
                        </div>
                    </div>
                </section>

                <section class="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden my-10">
                    <div class="p-6">
                        <h2 class="text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-5">Sync Logs</h2>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Date</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">System</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Status</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Message</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">2024-03-15 10:00 AM
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">LMS</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm"><span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-400/20 text-green-700">Success</span>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Data synced
                                        successfully</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">2024-03-14 02:30 PM
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">ERP</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm"><span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-500">Failed</span>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Connection timeout
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">2024-03-14 09:00 AM
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">University Systems
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm"><span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-400/20 text-green-700">Success</span>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">User data updated
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">2024-03-13 04:15 PM
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">LMS</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm"><span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-400/20 text-green-700">Success</span>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Course information
                                        synced</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">2024-03-12 11:45 AM
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">ERP</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm"><span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-400/20 text-green-700">Success</span>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Financial data
                                        synced</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="p-4 flex items-center justify-between border-t border-gray-200">
                        <p class="text-sm text-gray-700">Showing 1 to 5 of 50 results</p>
                        <div class="flex items-center gap-2">
                            <button class="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 cursor-pointer">
                                <span class="material-symbols-outlined text-lg"><MdKeyboardArrowLeft /></span>
                            </button>
                            <button class="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 cursor-pointer">
                                <span class="material-symbols-outlined text-lg"><MdKeyboardArrowRight /></span>
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default IntegrationSupport
