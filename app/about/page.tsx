export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-8">
            About Us
          </h1>

          <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-xl p-8 mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              We are a passionate team dedicated to building amazing digital experiences.
              Our mission is to create innovative solutions that make a difference.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              With years of experience in web development and design, we bring ideas to life
              using cutting-edge technologies and best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Pushing boundaries with creative solutions
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Quality
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Delivering excellence in every project
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Speed
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Fast, efficient, and reliable delivery
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
