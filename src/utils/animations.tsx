import gsap from "gsap";

export const animateWithGsap = (target: string, animationProps: any, scrollProps: any) => {
    gsap.to(target, {
        ...animationProps,
        scrollTrigger: {
            trigger: target,
            toggleActions: 'restart reverse restart reverse',
            start: 'top 85%',
            ...scrollProps
        }
    })
}

export const animateWithGsapTimeline = (timeline: any, rotationRef: any, rotationState: any, firstTarget: any, secondTarget: any, animationProps: any) => {
    timeline.to(rotationRef.current.rotation, {
        y: rotationState,
        duration: 1,
        ease: 'power2.inOut'
    });

    timeline.to(firstTarget, { ...animationProps, ease: 'power2.inOut' }, '<');

    timeline.to(secondTarget, { ...animationProps, ease: 'power2.inOut' }, '<');
}