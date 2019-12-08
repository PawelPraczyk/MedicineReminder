using ExternalDevice.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Essentials;
using Xamarin.Forms;

namespace ExternalDevice
{
    public partial class MainPage : ContentPage
    {
        MainViewModel main;
        public MainPage()
        {
            InitializeComponent();

            BindingContext = main = new MainViewModel();

            buttonek.Clicked += ButtonClicked;
        }

        private void ButtonClicked(object sender, EventArgs e)
        {
            main.Vibrate();
        }

        public void Vibrate()
        {
            try
            {
                // Use default vibration length
                Vibration.Vibrate();

                // Or use specified time
                var duration = TimeSpan.FromSeconds(5);
                Vibration.Vibrate(duration);
            }
            catch (FeatureNotSupportedException ex)
            {
                // Feature not supported on device
            }
            catch (Exception ex)
            {
                // Other error has occurred.
            }
        }
    }
}
