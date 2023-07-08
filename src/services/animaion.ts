
export const createObserve = (elements: any, addedClass: string) => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle(addedClass, entry.isIntersecting);
            // if(entry.isIntersecting)  observer.unobserve(entry.target)

          });
      }, {
        threshold: 1
      });
      
      elements.forEach((el: any) => {
        observer.observe(el);
      })
      
}

export const addElementsOnScroll = (elements: any) => {
    // const observer = new IntersectionObserver(entries => {
    //     entries.forEach(entry => {
    //         entry.target.classList.toggle('', entry.isIntersecting);
    //         // if(entry.isIntersecting)  observer.unobserve(entry.target)

    //       });
    //   }, {
    //     threshold: 1
    //   });
      
    //   elements.forEach((el: any) => {
    //     observer.observe(el);
    //   })
      
}

  
  