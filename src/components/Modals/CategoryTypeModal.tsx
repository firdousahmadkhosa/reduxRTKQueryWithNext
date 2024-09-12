import React from "react";

const CategoryTypeModal: React.FC = () => {
    return (
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-black bg-opacity-50">
                <div className="relative w-full max-w-lg p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <div className="flex justify-between items-center border-b pb-2 mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Modal Title
                        </h3>
                        <button

                            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition duration-200"
                        >
                            ✕
                        </button>
                    </div>
                    <form >
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"

                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"

                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            />
                        </div>
                        <div className="flex justify-end space-x-3">
                            <button
                                type="button"
                                className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition duration-200 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-500"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 text-white bg-primary rounded-md hover:bg-primary-dark transition duration-200"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
    )
}
export default CategoryTypeModal