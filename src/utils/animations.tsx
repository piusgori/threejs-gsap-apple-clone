export const animateWithGsapTimeline = (timeline: any, rotationRef: any, rotationState: any, firstTarget: any, secondTarget: any, animationProps: any) => {
    timeline.to(rotationRef.current.rotation, {
        y: rotationState,
        duration: 1,
        ease: 'power2.inOut'
    });

    timeline.to(firstTarget, { ...animationProps, ease: 'power2.inOut' }, '<');

    timeline.to(secondTarget, { ...animationProps, ease: 'power2.inOut' }, '<');
}