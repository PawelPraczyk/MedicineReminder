using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Essentials;
using Xamarin.Forms;

namespace Device
{
    public partial class MainPage : ContentPage
    {
        public MainPage()
        {
            InitializeComponent();
        }
        void Handle_Clicked(object sender, System.EventArgs e)
        {
            try
            {

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
