/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Signup() {
  return (
    <>
      <div
        style={{
          border: "2px solid black",
          width: "500px",
          margin: "30px auto",
        }}
      >
        <div
          className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 border-indigo-500/75

        "
        >
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAKsAtgMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQUGBwIDBAj/xABLEAABAwIDBAUGCQkHBAMAAAABAAIDBBEFEiEGEzFBByJRYXEjM4GRobEUMjRCUnKSwdEVFyQ2U2J0gsIWVHOUsrPSg5Oi4Qg1Q//EABoBAAIDAQEAAAAAAAAAAAAAAAADAgQFAQb/xAAyEQACAQMDAgMFBwUAAAAAAAAAAQIDBBESITEFQTJRYRQiUnGhBhNCYpHR4RUWM7HB/9oADAMBAAIRAxEAPwC5nMc55cGkgnit0j2uYWtNyeASCVrBkN7jRYNidGc7rWHYgAhBjcS8ZRa2qWbyhBZ1rdiV7hOMrOI11Qw7gWfz7EAZROaxga42I5Facjt5msbXvdZOjdKc7bWPaontd0hYZs+H0cDfhuItGUwsdZsZ/fdy8Br4cVKMJTeInG0uSXVEse5cS9oAFySbABQrFekvAcJc9lO+TEJuGWmAyDxedPVdVJj+0uK7QSE4jVF0V7tp2dWNv8vPxNymlXYWi/GxMqvkTzFulXHKxx+BU9LQstYWG9ePSdP/ABUbrNq9oaz5RjVdbsjmMY9TLBM6FZjShHhC3Jvk2y1dTMbzVM0n15C73rW17mm7XEHtBSITDh2QYvilMQabFK+H/Dqnt9xT3Q9IG09I65xH4S36FTG149ejvaowhRcIvlHU2i18G6X2ENixrDHM0A31I7MPsO4esqcYBj2FY0BJhlbFPlF3MBs9vi06j1LzgsopHwyslhe+OVhu17HFrmntBHBV52kH4diaqNcnqSYiRoDOsb8kQkRtIf1STzVObJ9KFZQSNgx5jqynOnwhgAlZ4jg72HxVsUFfSY3SR1uGVEc9O7QPaefYRyPcdVSqUpU+R0ZKXB0Stc95c0Eg8wtpe0sLQRe1rLFsgibkde47FjunB2c2sDdKJCRNLH5niw7Ssp/KWyda3GyVzxMMjb3PakZ5C+fn2IAyhIjZZ5sb8ChYvaZjmZw4aoQAu5z9fNa+tkm93vUta/O6xdK5ri0HQGwWx0bY2lzRYjggDEt3HWBzX0sg2mBe4hgbxRG4zHK/UAXVQdJ22vw2WXA8GlIomEtqpmnz7ubQfojn2+HFlKm6ksIjKWlG7bvpHfM2TCtm5i2AXbLXMNnP7RH2D97ny7TWaELVhTjBYRWcm3uCEIUzgIQhAAhCEACEIQAIQhAAnTZzaDEdnK4VWGzZb23sLtWSjscPv4hNaFxpNYYHonZTaSg2rozUUr91UssJ6Zxu6M/eDyP33CfN9fyeXj1b3XmbCMUrMGxGKvw6YxVER0PEOHNrhzB7PvsvQOyeP0W0uENr6UZJmaTwl1zE+3DvHMHmPSFm16H3e64LEJ6tmPG73PXve3JA/SOPVypGPMrsr9Qlk8jbd6X4qsMDPuOoBm53QljaJm5n6nglQArAwsBcG5ra3WmMuLwHlxHO/BK6NznFwFwTcFacYxSlw3CqquqX2igjL3WGptyHeeA8UJZ2AhfSvtUMIoW4RhsmSuq23kew2MMXD1u1A8CexUqAALDQLrxXEKjFsSqK+rN5qh5e4X0b2NHcBYDwXKtejTVOOCrKWp5BCEJpEEISIAFvjpKmVmeOmmez6bYyR61Ldm9noooGVdfGHzPGZkbhowcrjt9yfq/5HJ4D3rFuesxpz0U1nHc27bo0qkNdSWM9ir3scx2WRjmO7HNIKRTKeGKdhZMwPb2FRfE6P4FUhgN2PF2E8T2+pWLPqMLh6GsSK9702dstaeYnKhCFpGYCEIQAIQhAAnnZHaGfZrGY62LM+B1mVMIPnY/xHEf+ymZC40pLDBbHqKGpp6yiiq6J7JIpmB8b2fOaeazh1vvNezMqt6GtobPlwKrfo0OmpSez57P6h4uVpS+Wtu9bcVkVabpy0lqMtSyJNcP8ncC3zULKJwiblk0PFKlkhBKGDIQbjRVd0z4qYYqPBIni8v6RUAfRBswHxNz/AChWiIQ8B5JudV5123xQ4vtXiNXmJYJTFH2BrOqLeNifSrNrDVPPkLqPCGNCELTK4IQhAAunC4W1GJUsT7Fr5WhwPMX1C5lnTzOp6iKdgu6J7XgdpBuozTcWlySg0pJvgtZc9f8AI5PAe9Z008dTTxzwuzRyNDmnuWFf8jk8B714LDTwz36aayhkTJtewfkjfDR8MrXMPZc2+9PajO21Y1lLFRNPXldncOxo4es+4q9Yxk7iGnzKd9KKt56vIZ6SpbO2x0eOIXQmfD6aqra6Clw+J8tVM8MijZxc4q89nuimipqFtTtTVGSbKHSQwybuKPtBdxPjcL1cq0YL3jxzpvOxUiFbtTszsPWVHwXC3Usjg3hT1xe6/wBoqHbV7FT4NE6sopHVFE3V4cOvEO024jv0t7VyFxCTxwccGiJoQhPIAhCEAdOF182FYlTYhTedppBI0fStxHgRcelelqCqhno4KyB28gqY2yRuHNpFx715gV4dEOIflHZQUkriX0ErogeeU9ZvvI9Cp3kMxUhtJ74JqWGc526DhqhDnGA5G6jjqhZ484car3YbhddVh1hTQSSD+VpIXmcXsLm55ntXoTpGnEGwmKdYBzomxkc+s5rT7158WhZr3WxFXkEIQrgoEIQgAQhdNDQVWISZKSEyEcTwDfEqMpRgtUnhEoxlJ6YrLOzBcdqMJuwN31OTcxE2se0H7k9S7aYLUUr2PlmglP8A+ckLrjXtFx7VhSbG3aDW1ZB5thbw9J/BbK7Y7CNw6RzJnPbbrGS3uXnrup06rPVvn0/k9FZU+o0oacLHr/Aw1+1tNGwtoY3TSHg54ytH3n2eKiNTPLVTvnneXyPN3OKmFRsjQvB3E08TuVyHD1Wv7UyYjs3X0bS+MCpiGpdGOsPFv4XVmyq2cNqbw35ib2leT3qLKXkWZ/8AH3Aon/lDH5mB0jH/AASnJ+boHPPpu0eg9qhfSXtnV7U43UQsmc3CaeQsp4Gnqvsbbxw5k2uOwW772n0EfqDKe2sm9zV55j823wCuwWqpJvsZfYUdVwc3RwNwRoQVcvRXtNPjVHUYVij9/UUzAWSSamWI6Wd2kHS/MEKm1Ouhv9bZv4GT/XGpVknBnEcG0VK3CNpK7C+DI5M0JJ4scA5o9ANvQuROPS0LbaSkaE08R09KYaKr3lo5T1+R7U6lPMVkVOHdHahCE0WCsToWrnQ4viNGHWE9O2QDvY639artS/onn3O3FGCQBLHLGb/VLv6Uqus02Sh4kXvE0StzPFzeyVYTXc+7LkW5IWQWiJdKzXf2HxCQfFL4f91qohegOkhu+2IxSHLfJG19/qvafuXn9aVn4H8yvV8QIQhWhYIQt1DSvrayKmi0dI61+wcz6BdclJRTb4R2MXJpLljls9gb8Vl3kt2UrD1nDi89g/FTyngipoWw08bY428GtCSkpoqSmjp4G5Y4xYBbV429vZ3M/wAvZHs7Gyhaw/M+WC0V/wAjk8B71vWiv+RyeA96pLkvMZF14dh82ISObEWtDRdzncAuRSLZL4tV4s+9LuqjpUnKPImpJxi2iSbLGLAsLkoyzM6SV0hdGLAkgD16KpW9E9cGgflam0H7F34q1kKnT67fU1iMvojJna0pycpLdlRy9GNZE/KcUpz/ANF34p+2H2Vm2ZxmSvnq46hrqd0QYxhadXNN9fqqWVcsbqkta9pdYaArUr661eyh70vov2D2GiuxEduNkqnaHGZMSpKmGMmFrBFIDqRfmOHHsVXzRSU88kMrSyWJ5Y9p+a4GxHrV/Kk9rP1nxT+Ictvot/WuJyp1HnCKV7bwpRTiY0VXvLRynr8j2rtUfTnRVe8tHKevyPavSRkZUo90dqkvRsC7bnCQ36cn+09RpS3oqjz7b0T7X3Mcrz9gt/qXKvgl8iEeUXyxwhGV/HjohJk3/Xvl5W4oWMWzjxvDm4ngddSkEuqaZ7PS5pC8ytN2gkWuOC9Ruc4PIBIAK877a4YcI2qxKjy2jExkj7Mj+sLeF7ehXrOXMRNVcMZUIQrwkFJthqYPq6ipcPNsDG+LuPu9qjKecD2ipcCpJW1NPUSmSTNmiDSALAa3I71S6hGpK2lGmstl3p0qcbmMqjwkT9CiH5w8L/udd9ln/JH5w8L/ALnXfZZ/yXl/YLn4Geq9vtvjRL1or/kcngPeov8AnDwv+5132Wf8lqqdvsMmgdG2lrQXcy1lv9SFYXPwMPb7b40OSkWyXxarxZ96rz+11B+xqfst/FTPo8xenxVleadkrd0Yw7eADjm7D3Kp1K1rU7WUpRwtv9oXK6o1FpjLLJgtNZm3By+nwW5C8xF4aYoiVdn/ACg3d/H0snZcbf8A7V3+GuxasnwW68sxgvJAqT2s/WfFP4hyuxUntZ+s+KfxDlv/AGd/zz+X/TG6j4I/MakIQvWmQOdFV7y0cp6/I9qtLoToBPjmIVjmnLBTCMHve6/9Cppeg+hahmpdjG101xJXzukBtY7tvVb7Q4+lLrzxTaIqHvZLCe4wnKzhx1QsoQHsu8Am/NCzRorXtawNJsQLWVU9M2CPDKPGo49G/o857uLD68w9IVpGJzznBFjquXGqKmxzCqrDKlrt3UxlhP0TxDh3g2I8EylPRNSIyWVg8yoXTidBUYXiFRQVjctRTyFjwOBPaO4ixHcQuZbHJVBIQHAgi4PEJUIAaaykMJzs1jPsXKn8gOBBFweITTWUhhOZmsZ9ihKI2Ms7M5kIQoDAVndC5G7xgX1zQm321WK7sHxjEMEqjU4ZUmGQjK7QODh2EHQqj1O0ld2k6MHhvH0aY2hUVOopM9FIVKfnI2l/b0v+XH4o/ORtL+3pf8uPxXjv7YvfOP6v9jT9vpepbNXGxtS5zWgEgXIC1Kp5OkDaGR2Z01Nf/AH4rD+3u0H7am/7AVuP2fu1FJtfq/2O/wBQpepbapLatwdtNihaQR8JcNO7Qpwk272gexzRUwsuLZmQC48LqOOc5zi57i5zjckm5J7StjpPTKtpOU6jW6xsVLu5hWSUREIQtwonVhWHz4tidLh1ILz1UrYmacCTa57hxPcF6zwehhwjD6ehhBZBTxMijvxytFgqh6CNmSZptqKyPyceaCjuNS46PePD4oPe9XM7y/xNLdqpXM8y0rsSQkrTI7MwXFrIWTXCAZH3J46IVY6Jviw5ABYaXSmIRDOCTbksmxsc0OcNSLnVamSOe4Ncbg8QgCvelbZh2KUv5boIb1dLHadjBrLEOfi3X0X7AqdXqeVoibmjFiTZUt0j7FOwqSTGMLivh0jrzRtHydx5/UPsPdZXrWt+CQmpDuiBIQhXhIJCA4EEXB4hKhADRWUhhOZmsZ9i5k/kBwIIuDxCaqykMJzs1jPsUJRGxlnZnKhCFAYCEIQAIQhAAhCEACetj9m6rarHIcOpbtZ8eomA0hjHE+PId5C4MIwutxnEYMPw2B09VO6zGD2knkBzK9KbCbKUuyOFCigIlqZnB1XUZbGV3Cw7GjgB4niSlVquhep1IfMLo6agw+nwyiiENLTxiONoN7Ae8966j+j8Nc3aspGNibmYLFYxeWvvNbcFnEhQzf8AXJty0QsZHGJ2WM2FroQBi7PnOXNa+lluky5DktflZI2RrWhpOoFjotbI3RuDnCwHFACw3zHeXtb5ySqY2RpZlD2OaQ5trgg8iFnI4TNDY9SDdEZEIIk0JQBTm3XR1Nh+8xLAY3S0erpaQavg72jiW93Ed44V2CCLjUL1K9jpHl7NQeBUK2v6PMMxxz6rDntocRdq4hvkpT+8BwP7w9N1do3WNpiZU+6KQQnPHdn8VwCfdYrSPhubMkGsb/quGh8OPcmxXk01lCQSEBwIIuDxCVC6A01lIYTnZrGfYuVP5AcCCLg8QmqspDCc7NYz7FCURsZZ2ZyoQhQGAhCGgue1jGlz3ENa1ouXE8ABzQAJz2dwDEtpMRbQYTTmWU6veTZkTfpPdyHtPIFTTY/olxXFslVj5kwqhOuQt8vIO5p+J/Nr3K7MFwHDcEoGUWCUkcFO3V2X4z3fScTq495SKldR2W7OpDPsTsVRbIURZTXnrZQN/Vlti/8Adb2NHZ61LTkyG2XNb03SMe2NoY82I4rWI3B2cjqg39CottvLJBFmz9e+X97gs5uW79OVLI9srcrDcrGLyN95pfguAZQ2y+Ute/zkLCRpldmZqLWQgBdyX9e4F9bJd7vRkAtfmtkfmm+C5ofOtQBsDdx1jrfRBG/1GlllVebHikpfiu8UAAk3IyEXtzSbo33l9ONlhP51y6D5r+VAHPUNhroXU08LJI3izmSNDmkd4Kg+O9FuC1V5KCSXD5XcBH147/VPD0EKcU/nQtlVwb4qcKkoeFnHFPko7EejDaOmzPo2U9fGDpuZA13pDrD1EqNVmA4xQvLKvCq2IjiTA63rAsvS9L5s+K0ym0jvFWI3k1yhbpLseXHPa1xa5wDhxBNiFi58ZaQ5zCD2lerJ42SRHeMa7T5wuuWmp4BJpDFw+gEz21fD9Tn3XqeUHYXUzOBoKeapY42AhjLyD6E8YV0ebW4oWmDBKmJh+fVWhA9DrH1BenqrTLbvWdP5v0pUrpvhDFHzKRwToUqHPDsfxVkTb6w0TczvtuFh9kqztndi8C2XAlwygibMBYzydeU/zHUeAsE8O86frLpn805JlVnLlncGsu3/AFRpbVAO46p1vqkpfjnwRVfGHglnRTGZeuDa/JLvQfJ249W6zg801czfOj633oA2hhh65N7ckH9I4aZVnUeaKwpeLvQgAD9x1CL80qwqfOehCAP/2Q=="
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{" "}
              <a
                href="#"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Start a 14 day free trial
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
