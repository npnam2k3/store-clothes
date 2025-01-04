
import useTranslateX from '@components/SaleHomePage/translateXImage'
import styles from './style.module.scss'
import Button from '@components/Button/Button'

const SaleHomePage = () => {
    const {container, title, desc, contentBox,boxBtn, boxImage} = styles

    const {translateXPosition} = useTranslateX()
    
  return (
    <div className={container}>
        <div className={boxImage} style={{
            transform: `translateX(${translateXPosition}px)`,
            transition: 'transform 0.6s ease'
        }}>
            <img src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg" alt="" />
        </div>
        <div className={contentBox}>
            <h2 className={title}>Sale of the year</h2>
            <p className={desc}>Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales.</p>
            <div className={boxBtn}>
                <Button content={"Read more"} isPrimary={false}/>
            </div>
        </div>
        <div className={boxImage} style={{
            transform: `translateX(-${translateXPosition}px)`,
            transition: 'transform 0.6s ease'
        }}>
            <img src="	https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg" alt="" />
        </div>
    </div>
  )
}

export default SaleHomePage